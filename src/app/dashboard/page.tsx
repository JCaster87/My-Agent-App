import { getUserId } from '@/lib/auth';

export default async function Dashboard() {
  const userId = await getUserId();
  if (!userId) return <main className="p-8">Please sign in.</main>;
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-2xl font-bold mb-4">Your Agents</h1>
      <p className="text-gray-600">Create and run agents. (Lists will appear once DB is connected.)</p>
    </main>
  );
}
