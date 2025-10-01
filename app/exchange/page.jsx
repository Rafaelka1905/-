import React from "react";
import { Card, AnimatedButton } from "../../components";

export default function ExchangePage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} className="card">
          <h3 className="text-lg font-bold mb-2">Лот #{i}</h3>
          <p className="text-gray-700 mb-4">Описание предложения на бирже.</p>
          <AnimatedButton className="btn btn-ghost">Предложить</AnimatedButton>
        </Card>
      ))}
    </div>
  );
}


