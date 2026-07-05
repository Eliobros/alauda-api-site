// app/docs/page.tsx
// Página inicial da documentação

import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export default function DocsIntroPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Bem-vindo à Alauda API 🚀
        </h1>
        <p className="text-xl text-gray-400">
          API de downloads e serviços para bots WhatsApp - Moçambique 🇲🇿
        </p>
        <div className="inline-block mt-4 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/50">
          ✓ v1.0 - Stable
        </div>
      </div>

      {/* O que é */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">O que é a Alauda API?</h2>
        <p className="text-gray-400 mb-4">
          A Alauda API é uma solução completa para integração de serviços de mídia social e ferramentas 
          de processamento em seus bots e aplicações. Oferecemos downloads de vídeos, áudio, reconhecimento 
          de músicas e processamento de imagens.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">📥</div>
            <h3 className="text-lg font-semibold text-white mb-2">Downloads</h3>
            <p className="text-sm text-gray-400">
              YouTube, TikTok, Instagram, Spotify, Facebook e XVideos
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🎼</div>
            <h3 className="text-lg font-semibold text-white mb-2">Serviços</h3>
            <p className="text-sm text-gray-400">
              Shazam, Lyrics, Remove BG, Vocal Remover, CPF e Tina AI
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="text-lg font-semibold text-white mb-2">Integrações</h3>
            <p className="text-sm text-gray-400">
              WhatsApp, Pagamentos (M-Pesa, E-Mola, MercadoPago)
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Quick Start</h2>
        <p className="text-gray-400 mb-6">
          Comece a usar a API em 3 passos simples:
        </p>

        <div className="space-y-6">
          {/* Passo 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-white">Obtenha sua API Key</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Crie sua conta e gere uma API Key no dashboard.
            </p>
            <Link
              href="/register"
              className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition"
            >
              Criar conta →
            </Link>
          </div>

          {/* Passo 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-white">Faça sua primeira requisição</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Use sua API Key para fazer chamadas aos endpoints:
            </p>
            <CodeBlock
              language="bash"
              code={`curl -X POST https://alauda-api.mozhost.shop/api/youtube/download \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "format": "mp4",
    "quality": "720p"
  }'`}
            />
          </div>

          {/* Passo 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-white">Explore os Endpoints</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Navegue pela documentação para descobrir todos os recursos disponíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Base URL */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">URL Base</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <code className="text-purple-400 font-mono">
            https://alauda-api.mozhost.shop
          </code>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Todas as requisições devem ser feitas para esta URL base
        </p>
      </section>

      {/* Exemplo de resposta */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Formato de Resposta</h2>
        <p className="text-gray-400 mb-4">
          Todas as respostas são retornadas em formato JSON com a seguinte estrutura:
        </p>
        <CodeBlock
          language="json"
          title="Resposta de Sucesso"
          code={`{
  "success": true,
  "message": "Success",
  "data": {
    // ... dados específicos do endpoint
  }
}`}
        />
        <CodeBlock
          language="json"
          title="Resposta de Erro"
          code={`{
  "success": false,
  "error": "Descrição do erro",
  "message": "Informações adicionais"
}`}
        />
      </section>

      {/* Alert */}
      <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mb-12">
        <div className="flex gap-3">
          <div className="text-blue-400 text-xl">💡</div>
          <div>
            <h3 className="text-blue-400 font-semibold mb-1">Dica</h3>
            <p className="text-gray-300 text-sm">
              Todos os endpoints retornam JSON e usam autenticação via header{' '}
              <code className="text-purple-400">X-API-Key</code>
            </p>
          </div>
        </div>
      </div>

      {/* Próximos passos */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Próximos Passos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/auth"
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
          >
            <div className="text-2xl mb-2">🔐</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
              Autenticação
            </h3>
            <p className="text-sm text-gray-400">
              Aprenda como autenticar suas requisições
            </p>
          </Link>

          <Link
            href="/docs/plans"
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
          >
            <div className="text-2xl mb-2">💎</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
              Planos & Preços
            </h3>
            <p className="text-sm text-gray-400">
              Conheça os planos disponíveis
            </p>
          </Link>

          <Link
            href="/docs/youtube"
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
          >
            <div className="text-2xl mb-2">📺</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
              Endpoints
            </h3>
            <p className="text-sm text-gray-400">
              Explore os endpoints disponíveis
            </p>
          </Link>

          <Link
            href="/docs/errors"
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
          >
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
              Códigos de Erro
            </h3>
            <p className="text-sm text-gray-400">
              Entenda os erros retornados
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
