import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { agents, runs } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { getUserId } from '@/lib/auth';
import { runAgentOnce } from '@/lib/runAgent';
import { sendOutputEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  const { agentId } = await req.json();
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const [agent] = await db.select().from(agents).where(eq(agents.id, agentId));
  if (!agent || agent.userId !== userId) return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  const [run] = await db.insert(runs).values({ agentId, userId, status: 'processing' }).returning();
  try {
    const result = await runAgentOnce(agent as any);
    await db.update(runs).set({ status: 'succeeded', finishedAt: new Date(), outputSummary: result.summary, outputData: result.data }).where(eq(runs.id, run.id));
    const emailTo = (agent as any).config?.emailFrom; if (emailTo) await sendOutputEmail(emailTo, (agent as any).name, result);
    return NextResponse.json({ ok: true });
  } catch (e) {
    await db.update(runs).set({ status: 'failed', finishedAt: new Date(), error: String(e) }).where(eq(runs.id, run.id));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
