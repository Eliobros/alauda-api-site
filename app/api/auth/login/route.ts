// app/api/auth/login/route.ts
// Proxy para endpoint de login

import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.API_URL || 'http://localhost:3003';

export async function POST(request: NextRequest) {
  console.log('🔍 API_URL carregada:', process.env.API_URL);
  
  try {
    const body = await request.json();
    
    console.log('🔍 Fazendo requisição para:', `${API_URL}/api/auth/login`);
    
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log('✅ Resposta recebida:', data);

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ Erro no proxy de login:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao conectar com o servidor',
      },
      { status: 500 }
    );
  }
}

