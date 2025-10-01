"use client";
import { useEffect, useState } from 'react';

export default function OrdersPage() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  async function load() {
    const r = await fetch('/api/orders', { cache: 'no-store' });
    const j = await r.json();
    setItems(j.items || []);
  }

  useEffect(() => { load(); }, []);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/orders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ title, budget: Number(budget), location }),
    });
    setTitle('');
    setBudget('');
    setLocation('');
    await load();
    setLoading(false);
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Создать заказ</h1>

      <form onSubmit={submit} className="space-y-4 bg-white/60 backdrop-blur p-6 rounded-2xl shadow-md mb-8">
        <div>
          <label className="block mb-1 font-medium">Что нужно?</label>
          <input
            className="w-full p-3 rounded-xl border border-gray-300"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Название / описание"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Бюджет (₽)</label>
          <input
            type="number"
            className="w-full p-3 rounded-xl border border-gray-300"
            value={budget}
            onChange={e => setBudget(e.target.value)}
            placeholder="Например 80000"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Локация</label>
          <input
            className="w-full p-3 rounded-xl border border-gray-300"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Город / регион"
            required
          />
        </div>
        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? 'Создаём…' : 'Создать'}
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Список заказов</h2>
      {items.length === 0 ? (
        <p className="opacity-60">Заказов пока нет.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((o) => (
            <li key={o.id} className="p-4 bg-white/60 backdrop-blur rounded-xl shadow-sm">
              <div className="font-medium text-lg">{o.title}</div>
              <div className="text-sm opacity-70">Бюджет: {o.budget} ₽ • {o.location}</div>
              <div className="text-xs opacity-50">Создан: {new Date(o.createdAt).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
