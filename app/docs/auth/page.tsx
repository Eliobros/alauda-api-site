// app/docs/auth/page.tsx
// Documentação de autenticação

import CodeBlock from '@/components/CodeBlock';

export default function DocsAuthPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Autenticação 🔐</h1>
        <p className="text-xl text-gray-400">
          Como autenticar suas requisições na Alauda API
        </p>
      </div>

      {/* Visão Geral */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Visão Geral</h2>
        <p className="text-gray-400 mb-4">
          A Alauda API utiliza autenticação baseada em <strong>API Key</strong> via header HTTP. 
          Cada requisição deve incluir sua chave no header <code>X-API-Key</code>.
        </p>
      </section>

      {/* Como usar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Como Usar</h2>
        <p className="text-gray-400 mb-4">
          Adicione o header <code>X-API-Key</code> em todas as suas requisições:
        </p>

        <CodeBlock
          language="bash"
          title="Exemplo com cURL"
          code={`curl -X POST https://api.alauda.mz/api/tiktok/download \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://tiktok.com/@user/video/123"
  }'`}
        />

        <CodeBlock
          language="javascript"
          title="Exemplo com JavaScript (fetch)"
          code={`const response = await fetch('https://api.alauda.mz/api/tiktok/download', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://tiktok.com/@user/video/123'
  })
});

const data = await response.json();
console.log(data);`}
        />

        <CodeBlock
          language="python"
          title="Exemplo com Python (requests)"
          code={`import requests

headers = {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
}

data = {
    'url': 'https://tiktok.com/@user/video/123'
}

response = requests.post(
    'https://api.alauda.mz/api/tiktok/download',
    headers=headers,
    json=data
)

print(response.json())`}
        />
      </section>

      {/* Sistema de Créditos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Sistema de Créditos</h2>
        <p className="text-gray-400 mb-4">
          Cada requisição consome créditos da sua conta. O consumo varia por tipo de operação:
        </p>

        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Serviço
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Custo (Créditos)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-6 py-4 text-gray-400">YouTube Info</td>
                <td className="px-6 py-4 text-white font-semibold">10</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">YouTube Download</td>
                <td className="px-6 py-4 text-white font-semibold">50</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Spotify Search</td>
                <td className="px-6 py-4 text-white font-semibold">10</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Spotify Download</td>
                <td className="px-6 py-4 text-white font-semibold">50</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Instagram Download</td>
                <td className="px-6 py-4 text-white font-semibold">50</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">TikTok Info</td>
                <td className="px-6 py-4 text-white font-semibold">10</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">TikTok Download</td>
                <td className="px-6 py-4 text-white font-semibold">30</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Shazam Identify</td>
                <td className="px-6 py-4 text-white font-semibold">100</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Remove Background</td>
                <td className="px-6 py-4 text-white font-semibold">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Erros de Autenticação */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Erros de Autenticação</h2>
        <p className="text-gray-400 mb-4">
          Se houver problemas com a autenticação, você receberá uma das seguintes respostas:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-900 border border-red-500/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-400 font-semibold">401 Unauthorized</span>
            </div>
            <CodeBlock
              language="json"
              code={`{
  "success": false,
  "error": "API key não fornecida"
}`}
            />
            <p className="text-sm text-gray-400 mt-2">
              Você não incluiu o header <code>X-API-Key</code>
            </p>
          </div>

          <div className="bg-gray-900 border border-red-500/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-400 font-semibold">401 Unauthorized</span>
            </div>
            <CodeBlock
              language="json"
              code={`{
  "success": false,
  "error": "API key inválida"
}`}
            />
            <p className="text-sm text-gray-400 mt-2">
              A API Key fornecida não existe ou está incorreta
            </p>
          </div>

          <div className="bg-gray-900 border border-red-500/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-400 font-semibold">402 Payment Required</span>
            </div>
            <CodeBlock
              language="json"
              code={`{
  "success": false,
  "error": "Créditos esgotados. Recarregue sua conta."
}`}
            />
            <p className="text-sm text-gray-400 mt-2">
              Sua conta não tem créditos suficientes para essa operação
            </p>
          </div>

          <div className="bg-gray-900 border border-red-500/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-400 font-semibold">403 Forbidden</span>
            </div>
            <CodeBlock
              language="json"
              code={`{
  "success": false,
  "error": "API key expirada"
}`}
            />
            <p className="text-sm text-gray-400 mt-2">
              Sua API Key expirou. Renove sua conta
            </p>
          </div>
        </div>
      </section>

      {/* Alertas */}
      <div className="space-y-4">
        <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-yellow-400 text-xl">⚠️</div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-1">Atenção</h3>
              <p className="text-gray-300 text-sm">
                Mantenha sua API Key em segredo. Nunca a compartilhe publicamente ou faça commit em repositórios.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-blue-400 text-xl">💡</div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Dica</h3>
              <p className="text-gray-300 text-sm">
                Use variáveis de ambiente para armazenar sua API Key em produção. Nunca hardcode a key no código.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
