// ВНИМАНИЕ: это демо-память. На каждом холодном старте Vercel массив будет пустой.
let ORDERS = [];

export async function GET() {
  return new Response(JSON.stringify({ items: ORDERS }), {
     headers: { 'content-type': 'application/json' },
    status: 200,
  });
}

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const item = {
    id: crypto.randomUUID(),
    title: body.title || 'Без названия',
    budget: Number(body.budget ?? 0),
    location: body.location || '',
    createdAt: new Date().toISOString(),
  };
  ORDERS.unshift(item);
  return new Response(JSON.stringify(item), {
     headers: { 'content-type': 'application/json' },
    status: 201,
  });
}
