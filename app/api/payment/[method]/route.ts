// app/api/payment/[method]/route.ts
// Proxy server-side para os endpoints de pagamento da Alauda API.
// A API key da plataforma fica só aqui (variável de ambiente SEM o
// prefixo NEXT_PUBLIC_), então nunca é exposta no bundle do cliente.

import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://alauda-api.mozhost.shop';
const ALAUDA_API_KEY = process.env.ALAUDA_API_KEY || '';

// Métodos de pagamento permitidos e o endpoint real correspondente na Alauda API
const ALLOWED_METHODS: Record<string, string> = {
  mpesa: '/api/payment/mpesa',
  emola: '/api/payment/emola',
  mercadopago: '/api/payment/mercadopago',
};

export async function POST(
  req: NextRequest,
  { params }: { params: { method: string } }
) {
  const { method } = params;

  const endpoint = ALLOWED_METHODS[method];
  if (!endpoint) {
    return NextResponse.json(
      { success: false, error: `Método de pagamento inválido: ${method}` },
      { status: 400 }
    );
  }

  if (!ALAUDA_API_KEY) {
    console.error('[api/payment] ALAUDA_API_KEY não está configurada no servidor.');
    return NextResponse.json(
      { success: false, error: 'Configuração do servidor incompleta (API key ausente).' },
      { status: 500 }
    );
  }

  // Repassa o JWT do usuário logado, se vier
  const authHeader = req.headers.get('authorization');

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  try {
    const upstreamRes = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': ALAUDA_API_KEY,
        ...(authHeader ? { Authorization: authHeader } : {}),
      },
      body: JSON.stringify(body),
    });

    const data = await upstreamRes.json().catch(() => ({}));

    return NextResponse.json(data, { status: upstreamRes.status });
  } catch (err) {
    console.error('[api/payment] Erro ao chamar Alauda API:', err);
    return NextResponse.json(
      { success: false, error: 'Erro ao conectar com o serviço de pagamento.' },
      { status: 502 }
    );
  }
}
