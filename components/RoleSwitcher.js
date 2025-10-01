'use client';
import { useState, useEffect } from 'react';

export default function RoleSwitcher() {
  const [role, setRole] = useState('buyer');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
    if (saved) setRole(saved);
  }, []);

  function selectRole(newRole) {
    setRole(newRole);
    if (typeof window !== 'undefined') {
      localStorage.setItem('role', newRole);
    }
  }

  const activeClasses = 'bg-white text-indigo-600';
  const inactiveClasses = 'bg-indigo-400 text-white';

  return (
    <div className="space-x-2">
      <button
        onClick={() => selectRole('buyer')}
        className={`px-3 py-1 rounded ${role === 'buyer' ? activeClasses : inactiveClasses}`}
      >
        Покупатель
      </button>
      <button
        onClick={() => selectRole('seller')}
        className={`px-3 py-1 rounded ${role === 'seller' ? activeClasses : inactiveClasses}`}
      >
        Поставщик
      </button>
    </div>
  );
}
