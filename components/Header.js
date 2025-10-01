'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRole } from './useRole';
import { Store, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header(){
  const { role, switchRole } = useRole('buyer');

  useEffect(() => { document.documentElement.dataset.rmRole = role; }, [role]);

  const isBuyer = role === 'buyer';

  return (
    <div className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-indigo-700">
          <span className="text-xl">RM</span>
          <span className="hidden sm:block text-gray-700">Reverse Marketplace</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-3">
          <Link href="/orders" className="btn btn-ghost"><ShoppingCart size={18}/> Заказы</Link>
          <Link href="/market" className="btn btn-ghost"><Store size={18}/> Биржа</Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative bg-gray-100 rounded-2xl p-1 flex overflow-hidden">
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              className="absolute top-1 bottom-1 rounded-xl"
              style={{
                left: isBuyer ? 4 : 'calc(50% + 4px)',
                right: isBuyer ? 'calc(50% + 4px)' : 4,
                background: isBuyer ? '#4f46e5' : '#14b8a6'
              }}
            />
            <button onClick={()=>switchRole('buyer')} className="relative z-10 px-3 py-1 rounded-xl text-sm text-gray-800">
              Покупатель
            </button>
            <button onClick={()=>switchRole('seller')} className="relative z-10 px-3 py-1 rounded-xl text-sm text-gray-800">
              Поставщик
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
