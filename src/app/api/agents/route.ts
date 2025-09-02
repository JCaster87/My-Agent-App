import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { agents } from '@/lib/schema';
import { getUserId } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { name, templateKey, config, frequency } = await req.json();
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const nextRunAt = new Date();
  if (frequency === 'weekly') nextRunAt.setDate(nextRunAt.getDate() + 7); else nextRunAt.setDate(nextRunAt.getDate() + 1);
  await db.insert(agents).values({ userId, name, templateKey, config, frequency, nextRunAt });
  return NextResponse.json({ ok: true });
}
