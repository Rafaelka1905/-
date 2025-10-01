'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import Card from '../components/Card';

const list = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <motion.section initial="hidden" animate="show" variants={list} className="grid md:grid-cols-2 gap-6">
      <Card className="p-8" variants={item}>
        <motion.h1 variants={item} className="text-4xl font-bold mb-3">Найдём то, что вам нужно</motion.h1>
        <motion.p variants={item} className="text-gray-600 mb-6">
          Оставьте запрос — поставщики предложат цену и сроки. Деньги защищены.
        </motion.p>
        <div className="flex gap-3">
          <AnimatedButton className="btn-brand"><Link href="/orders">Создать заказ</Link></AnimatedButton>
          <AnimatedButton className="btn-ghost"><Link href="/market">Смотреть заказы</Link></AnimatedButton>
        </div>
        <motion.ul variants={list} className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-600">
          {['Безопасные сделки','Быстрые отклики','Рейтинг поставщиков','Поддержка 24/7'].map((t) => (
            <motion.li key={t} variants={item} className="chip">{t}</motion.li>
          ))}
        </motion.ul>
      </Card>

      <Card className="p-8 bg-indigo-50" variants={item}>
        <motion.h2 variants={item} className="text-xl font-semibold mb-3">Как это работает</motion.h2>
        <motion.ol variants={list} className="list-decimal ml-5 space-y-2 text-gray-700">
          {[
            'Покупатель публикует запрос с бюджетом и сроком.',
            'Поставщики отправляют офферы с ценой и ETA.',
            'Покупатель выбирает лучший — деньги блокируются.',
            'После подтверждения поставщик получает выплату.'
          ].map((t, i) => (
            <motion.li key={i} variants={item}>{t}</motion.li>
          ))}
        </motion.ol>
      </Card>
    </motion.section>
  );
}
