// app/api/auth/register/route.ts
// Proxy para endpoint de registro

import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.API_URL || 'http://localhost:3003';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Erro no proxy de registro:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao conectar com o servidor',
      },
      { status: 500 }
    );
  }
}
