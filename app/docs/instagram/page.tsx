// app/docs/instagram/page.tsx
// Documentação do endpoint Instagram

import CodeBlock from '@/components/CodeBlock';

export default function DocsInstagramPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Instagram 📸</h1>
        <p className="text-xl text-gray-400">
          Download de posts, stories e reels do Instagram
        </p>
      </div>

      {/* Download */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Download de Conteúdo</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/instagram/download</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Baixa posts, reels ou stories do Instagram em alta qualidade.
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
                <td className="px-4 py-3 text-gray-400 text-sm">URL do post/reel/story</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/instagram/download \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://instagram.com/p/ABC123/"
  }'`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const response = await fetch('https://alauda-api.mozhost.shop/api/instagram/download', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://instagram.com/p/ABC123/'
  })
});

const data = await response.json();
console.log(data.data.download_url);`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta (Reel/Vídeo)</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Download realizado com sucesso",
  "data": {
    "type": "reel",
    "download_url": "https://storage.alauda.mz/downloads/instagram/abc123.mp4",
    "thumbnail": "https://storage.alauda.mz/thumbnails/abc123.jpg",
    "username": "@usuario",
    "caption": "Descrição do post...",
    "likes": 15000,
    "comments": 250,
    "duration": 30,
    "quality": "HD",
    "size": "5.2 MB",
    "credits_remaining": 4820
  }
}`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta (Imagem)</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Download realizado com sucesso",
  "data": {
    "type": "image",
    "download_url": "https://storage.alauda.mz/downloads/instagram/xyz789.jpg",
    "username": "@usuario",
    "caption": "Descrição do post...",
    "likes": 8500,
    "comments": 120,
    "resolution": "1080x1350",
    "size": "1.8 MB",
    "credits_remaining": 4770
  }
}`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta (Carrossel)</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Download realizado com sucesso",
  "data": {
    "type": "carousel",
    "items": [
      {
        "type": "image",
        "download_url": "https://storage.alauda.mz/downloads/instagram/item1.jpg"
      },
      {
        "type": "video",
        "download_url": "https://storage.alauda.mz/downloads/instagram/item2.mp4"
      }
    ],
    "username": "@usuario",
    "caption": "Descrição do post...",
    "likes": 25000,
    "comments": 500,
    "credits_remaining": 4720
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 50 créditos por download
          </p>
        </div>
      </section>

      {/* Tipos Suportados */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Tipos de Conteúdo Suportados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">📷</div>
            <h3 className="text-lg font-semibold text-white mb-2">Posts (Imagens)</h3>
            <p className="text-sm text-gray-400">
              Imagens únicas ou carrosséis de fotos em alta resolução
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🎬</div>
            <h3 className="text-lg font-semibold text-white mb-2">Reels</h3>
            <p className="text-sm text-gray-400">
              Vídeos curtos verticais em qualidade HD
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">📹</div>
            <h3 className="text-lg font-semibold text-white mb-2">Vídeos</h3>
            <p className="text-sm text-gray-400">
              Posts de vídeo tradicionais do feed
            </p>
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
                <code className="text-purple-400 text-sm">https://www.instagram.com/p/ABC123/</code>
                <p className="text-gray-400 text-xs mt-1">Post tradicional</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://www.instagram.com/reel/DEF456/</code>
                <p className="text-gray-400 text-xs mt-1">Reel</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://www.instagram.com/stories/user/123456789/</code>
                <p className="text-gray-400 text-xs mt-1">Story (se ainda disponível)</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Características */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Características</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Alta Qualidade</p>
                <p className="text-gray-400 text-sm">Download na melhor resolução disponível</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Sem Watermark</p>
                <p className="text-gray-400 text-sm">Conteúdo limpo sem marcas d'água</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Metadados Inclusos</p>
                <p className="text-gray-400 text-sm">Username, caption, likes e comments</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Suporta Carrosséis</p>
                <p className="text-gray-400 text-sm">Baixa todos os itens de posts com múltiplas mídias</p>
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
                <li>• Contas privadas não podem ser acessadas</li>
                <li>• Stories expiram após 24 horas</li>
                <li>• Alguns conteúdos com restrições podem não estar disponíveis</li>
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
                Para baixar stories, certifique-se de que eles ainda estão disponíveis (menos de 24 horas).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
