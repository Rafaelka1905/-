'use client';
import { useState } from 'react';

export default function OrderForm() {
  const [title, setTitle] = useState('Ищу iPhone 13, 128ГБ');
  const [budget, setBudget] = useState(60000);
  const [location, setLocation] = useState('Москва');

  function submit(e){
    e.preventDefault();
    alert(`Заказ создан (демо)\nНазвание: ${title}\nБюджет: ${budget}₽\nЛокация: ${location}`);
  }
  const field = {display:'grid', gap:6, margin:'10px 0'};
  const input = {padding:'10px 12px', border:'1px solid #ddd', borderRadius:10};

  return (
    <form onSubmit={submit} style={{border:'1px solid #eee', padding:16, borderRadius:16}}>
      <div style={field}>
        <label>Название заказа</label>
        <input style={input} value={title} onChange={e=>setTitle(e.target.value)} />
      </div>
      <div style={field}>
        <label>Бюджет (₽)</label>
        <input style={input} type="number" value={budget} onChange={e=>setBudget(e.target.value)} />
      </div>
      <div style={field}>
        <label>Локация</label>
        <input style={input} value={location} onChange={e=>setLocation(e.target.value)} />
      </div>
      <button type="submit" style={{padding:'10px 14px', borderRadius:12, background:'#111', color:'#fff'}}>Создать (демо)</button>
    </form>
  );
}
