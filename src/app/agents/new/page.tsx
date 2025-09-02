'use client';
import { useState } from 'react';
import { templates } from '@/lib/templates';

export default function NewAgent() {
  const [tplKey, setTplKey] = useState(templates[0].key);
  const tpl = templates.find(t => t.key === tplKey)!;
  const [config, setConfig] = useState<Record<string, any>>({});
  const [name, setName] = useState('My Agent');
  const [frequency, setFrequency] = useState<'daily'|'weekly'>('weekly');

  const submit = async () => {
    await fetch('/api/agents', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, templateKey: tplKey, config, frequency }) });
    window.location.href = '/dashboard';
  };

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Create Agent</h1>
      <label className="block">Template
        <select className="border p-2 w-full" value={tplKey} onChange={e => setTplKey(e.target.value)}>
          {templates.map(t => <option key={t.key} value={t.key}>{t.name}</option>)}
        </select>
      </label>
      <label className="block">Name
        <input className="border p-2 w-full" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label className="block">Frequency
        <select className="border p-2 w-full" value={frequency} onChange={e => setFrequency(e.target.value as any)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </label>
      <div className="space-y-4">
        {tpl.inputs.map(field => (
          <label key={field.key} className="block">
            {field.label}
            {field.type === 'select' ? (
              <select className="border p-2 w-full" onChange={e => setConfig({ ...config, [field.key]: e.target.value })}>
                {field.options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ) : (
              <input className="border p-2 w-full" type={field.type === 'number' ? 'number' : field.type} onChange={e => setConfig({ ...config, [field.key]: e.target.value })} />
            )}
          </label>
        ))}
      </div>
      <button onClick={submit} className="bg-black text-white px-4 py-2 rounded">Create Agent</button>
    </main>
  );
}
