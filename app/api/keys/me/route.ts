// app/api/keys/me/route.ts
// Proxy para listar API Keys do usuário

import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.API_URL || 'http://localhost:3003';

export async function GET(request: NextRequest) {
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

    const response = await fetch(`${API_URL}/api/keys/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Erro no proxy de keys me:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao conectar com o servidor',
      },
      { status: 500 }
    );
  }
}
