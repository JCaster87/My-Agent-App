export default function Pricing() {
  return (
    <main className="mx-auto max-w-3xl p-8 space-y-6">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <ul className="grid md:grid-cols-3 gap-4">
        {[
          { name: 'Starter', price: '$29/mo', blurb: '1 agent' },
          { name: 'Pro', price: '$79/mo', blurb: '5 agents' },
          { name: 'Scale', price: '$149/mo', blurb: '15 agents' }
        ].map(t => (
          <li key={t.name} className="border rounded p-4">
            <div className="font-semibold">{t.name}</div>
            <div className="text-2xl">{t.price}</div>
            <p className="text-gray-600">{t.blurb}</p>
            <form action="/api/stripe/checkout" method="post"><button className="mt-3 px-4 py-2 bg-black text-white rounded">Subscribe</button></form>
          </li>
        ))}
      </ul>
    </main>
  );
}
