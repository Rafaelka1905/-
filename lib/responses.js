import { readJson, writeJson } from "./storage";

const RESPONSES_KEY = "responses"; // { [orderId]: Response[] }

export function listResponses(orderId) {
  const all = readJson(RESPONSES_KEY, {});
  return all[orderId] || [];
}

export function addResponse(orderId, response) {
  const all = readJson(RESPONSES_KEY, {});
  const current = all[orderId] || [];
  const nextItem = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...response,
  };
  const next = { ...all, [orderId]: [nextItem, ...current] };
  writeJson(RESPONSES_KEY, next);
  return nextItem;
}


