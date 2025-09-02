import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getUserId } from '@/lib/auth';

export async function POST() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: process.env.STRIPE_PRICE_BASIC!, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?status=cancel`,
    subscription_data: { metadata: { userId } },
  });
  return NextResponse.json({ url: session.url });
}
