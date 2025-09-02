import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import type Stripe from 'stripe';
import { db } from '@/lib/db';
import { subscriptions } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature') as string;
  const buf = Buffer.from(await req.arrayBuffer());
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription;
      const userId = (sub.metadata?.userId as string) || '';
      const tier = sub.items.data[0]?.price?.nickname || 'starter';
      await db.insert(subscriptions).values({
        userId,
        stripeCustomerId: sub.customer as string,
        stripeSubId: sub.id,
        tier: tier.toLowerCase(),
        status: sub.status,
      }).onConflictDoUpdate({
        target: subscriptions.stripeSubId,
        set: { status: sub.status, tier: tier.toLowerCase() },
      });
      break;
    }
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;
      await db.update(subscriptions).set({ status: 'canceled' }).where(eq(subscriptions.stripeSubId, sub.id));
      break;
    }
  }

  return NextResponse.json({ received: true });
}
