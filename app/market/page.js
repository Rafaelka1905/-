'use client';
import { useEffect, useState } from 'react';

export default function MarketPage() {
  const [items, setItems] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  async function load() {
    const r = await fetch('/api/orders', { cache: 'no-store' });
    const j = await r.json();
    setItems(j.items || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function respond(orderId) {
    setLoadingId(orderId);
    // Здесь можно добавить отправку настоящего оффера на сервер
    alert('Отклик отправлен!');
    setLoadingId(null);
  }

  return (
    <div>
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>Доступные заказы (демо)</h1>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 10 }}>
        {items.map(o => (
          <li key={o.id} style={{ border: '1px solid #eee', borderRadius: 12, padding: 12, marginBottom: 10 }}>
            <div style={{ fontWeight: 600 }}>{o.title}</div>
            <div style={{ opacity: .8, fontSize: 14 }}>Бюджет: {o.budget} ₽ • {o.location}</div>
            <div style={{ opacity: .6, fontSize: 12 }}>Создан: {new Date(o.createdAt).toLocaleString()}</div>
            <button
              disabled={loadingId === o.id}
              onClick={() => respond(o.id)}
              style={{ marginTop: 10, padding: '6px 10px', borderRadius: 8, background: '#111', color: '#fff' }}
            >
              {loadingId === o.id ? 'Откликаемся...' : 'Откликнуться'}
            </button>
          </li>
        ))}
        {items.length === 0 && <div style={{ opacity: .6 }}>Нет доступных заказов. Возвращайтесь позже.</div>}
      </ul>
    </div>
  );
}
