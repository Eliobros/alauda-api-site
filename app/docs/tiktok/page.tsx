// app/docs/tiktok/page.tsx
// Documentação do endpoint TikTok

import CodeBlock from '@/components/CodeBlock';

export default function DocsTikTokPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">TikTok 🎬</h1>
        <p className="text-xl text-gray-400">
          Download de vídeos do TikTok sem marca d'água
        </p>
      </div>

      {/* Info */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Informações do Vídeo</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
              GET
            </span>
            <code className="text-purple-400">/api/tiktok/info</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Obtém metadados do vídeo sem fazer download.
        </p>

        <h3 className="text-lg font-semibold text-white mb-3">Parâmetros</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden mb-4">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Campo
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Tipo
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Obrigatório
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">url</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">URL do vídeo do TikTok</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X GET "https://alauda-api.mozhost.shop/api/tiktok/info?url=https://tiktok.com/@user/video/123" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "id": "7123456789012345678",
    "description": "Descrição do vídeo #viral #fyp",
    "author": "@usuario",
    "author_name": "Nome do Usuário",
    "duration": 15,
    "views": 1500000,
    "likes": 250000,
    "comments": 5000,
    "shares": 10000,
    "music": "Som Original - @usuario",
    "cover": "https://p16-sign.tiktokcdn.com/...",
    "create_time": "2024-01-15T10:30:00Z"
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 10 créditos por requisição
          </p>
        </div>
      </section>

      {/* Download */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Download de Vídeo</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/tiktok/download</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Baixa o vídeo <strong className="text-green-400">sem marca d'água</strong>.
        </p>

        <h3 className="text-lg font-semibold text-white mb-3">Body (JSON)</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden mb-4">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Campo
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Tipo
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Obrigatório
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">url</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">URL do vídeo do TikTok</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/tiktok/download \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://tiktok.com/@user/video/123"
  }'`}
        />

        <CodeBlock
          language="python"
          title="Python (requests)"
          code={`import requests

headers = {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
}

data = {
    'url': 'https://tiktok.com/@user/video/123'
}

response = requests.post(
    'https://alauda-api.mozhost.shop/api/tiktok/download',
    headers=headers,
    json=data
)

result = response.json()
print(result['data']['download_url'])`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Download realizado com sucesso",
  "data": {
    "download_url": "https://storage.alauda.mz/downloads/tiktok/abc123.mp4",
    "no_watermark": true,
    "author": "@usuario",
    "description": "Descrição do vídeo #viral #fyp",
    "duration": 15,
    "size": "3.2 MB",
    "quality": "HD",
    "cover": "https://p16-sign.tiktokcdn.com/...",
    "music": "Som Original - @usuario",
    "credits_remaining": 4870
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 30 créditos por download
          </p>
        </div>
      </section>

      {/* Destaque */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Destaque Principal</h2>
        
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border-2 border-green-500 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">✨</div>
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Vídeos Sem Marca D'água</h3>
              <p className="text-gray-300 mb-4">
                Todos os vídeos baixados da Alauda API vêm <strong>sem a marca d'água do TikTok</strong>, 
                perfeitos para compartilhar ou usar em seus projetos!
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Vídeo limpo e profissional</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Qualidade HD mantida</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Rápido processamento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos de URL */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Formatos de URL Aceitos</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://www.tiktok.com/@user/video/123...</code>
                <p className="text-gray-400 text-xs mt-1">URL completa do vídeo</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://vm.tiktok.com/ABC123/</code>
                <p className="text-gray-400 text-xs mt-1">Link curto compartilhado</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://vt.tiktok.com/DEF456/</code>
                <p className="text-gray-400 text-xs mt-1">Link alternativo</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Alertas */}
      <div className="space-y-4">
        <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-yellow-400 text-xl">⚠️</div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-1">Limitações</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Vídeos privados não podem ser baixados</li>
                <li>• Alguns vídeos com restrições de região podem não estar disponíveis</li>
                <li>• Duração máxima: 10 minutos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-blue-400 text-xl">💡</div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Dica</h3>
              <p className="text-gray-300 text-sm">
                Use a rota <code>/info</code> primeiro para verificar se o vídeo está disponível antes de fazer o download.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
