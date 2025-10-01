import { readJson, writeJson } from "./storage";

const ORDERS_KEY = "orders";

export function listOrders() {
  return readJson(ORDERS_KEY, []);
}

export function createOrder(order) {
  const current = listOrders();
  const next = [
    {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "Черновик",
      ...order,
    },
    ...current,
  ];
  writeJson(ORDERS_KEY, next);
  return next[0];
}


