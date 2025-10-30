// app/api/keys/generate/route.ts
// Proxy para geração de API Keys

import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.API_URL || 'http://localhost:3003';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      return NextResponse.json(
        {
          success: false,
          error: 'Token não fornecido',
        },
        { status: 401 }
      );
    }

    const body = await request.json();

    const response = await fetch(`${API_URL}/api/keys/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Erro no proxy de generate key:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao conectar com o servidor',
      },
      { status: 500 }
    );
  }
}
