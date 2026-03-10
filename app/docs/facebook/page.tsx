// app/docs/facebook/page.tsx
// Documentação do endpoint Facebook

import CodeBlock from '@/components/CodeBlock';

export default function DocsFacebookPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Facebook 📘</h1>
        <p className="text-xl text-gray-400">
          Download de vídeos e reels do Facebook
        </p>
      </div>

      {/* Download de Vídeo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Download de Vídeo</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/facebook/download</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Faz download de um vídeo ou reel do Facebook em qualidade HD e SD.
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
                <td className="px-4 py-3 text-gray-400 text-sm">URL do vídeo ou reel do Facebook</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/facebook/download \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://www.facebook.com/watch/?v=123456789"
  }'`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const response = await fetch('https://api.alauda.mz/api/facebook/download', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://www.facebook.com/watch/?v=123456789'
  })
});

const data = await response.json();
console.log(data.data.download_url_hd);`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Download realizado com sucesso",
  "data": {
    "download_url_hd": "https://storage.alauda.mz/downloads/facebook/abc123_hd.mp4",
    "download_url_sd": "https://storage.alauda.mz/downloads/facebook/abc123_sd.mp4",
    "title": "Vídeo do Facebook",
    "duration": "2:45",
    "thumbnail": "https://storage.alauda.mz/thumbnails/facebook/abc123.jpg",
    "has_audio": true,
    "credits_remaining": 4999
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 1 crédito por requisição
          </p>
        </div>
      </section>

      {/* Info Only */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Apenas Informações</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/facebook/info-only</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Retorna apenas as informações do vídeo sem fazer download.
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
                <td className="px-4 py-3 text-gray-400 text-sm">URL do vídeo ou reel do Facebook</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/facebook/info-only \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://www.facebook.com/reel/123456789"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "title": "Reel do Facebook",
    "duration": "0:30",
    "thumbnail": "https://storage.alauda.mz/thumbnails/facebook/abc123.jpg",
    "has_audio": true,
    "quality_available": ["HD", "SD"]
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 1 crédito por requisição
          </p>
        </div>
      </section>

      {/* Batch */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Download em Lote</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/facebook/batch</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Faz download de múltiplos vídeos de uma vez. Máximo de <strong className="text-white">10 URLs</strong> por requisição.
        </p>

        <div className="bg-purple-500/10 border border-purple-500/50 rounded-lg p-4 mb-4">
          <p className="text-purple-400 text-sm">
            <strong>🔒 Apenas planos PRO e PREMIUM</strong>
          </p>
        </div>

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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">urls</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string[]</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Array de URLs (máx. 10)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/facebook/batch \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "urls": [
      "https://www.facebook.com/watch/?v=111111111",
      "https://www.facebook.com/reel/222222222",
      "https://fb.watch/abc123"
    ]
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Download em lote realizado com sucesso",
  "data": {
    "results": [
      {
        "url": "https://www.facebook.com/watch/?v=111111111",
        "download_url_hd": "https://storage.alauda.mz/downloads/facebook/vid1_hd.mp4",
        "download_url_sd": "https://storage.alauda.mz/downloads/facebook/vid1_sd.mp4",
        "title": "Vídeo 1",
        "status": "success"
      },
      {
        "url": "https://www.facebook.com/reel/222222222",
        "download_url_hd": "https://storage.alauda.mz/downloads/facebook/vid2_hd.mp4",
        "download_url_sd": "https://storage.alauda.mz/downloads/facebook/vid2_sd.mp4",
        "title": "Reel 2",
        "status": "success"
      }
    ],
    "total": 3,
    "successful": 3,
    "credits_remaining": 4997
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 1 crédito por URL no lote
          </p>
        </div>
      </section>

      {/* URLs Suportadas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">URLs Suportadas</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://www.facebook.com/watch/?v=123...</code>
                <p className="text-gray-400 text-xs mt-1">Vídeos do Facebook Watch</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://www.facebook.com/reel/123...</code>
                <p className="text-gray-400 text-xs mt-1">Reels do Facebook</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://www.facebook.com/share/v/ABC123/</code>
                <p className="text-gray-400 text-xs mt-1">Links de compartilhamento</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <div>
                <code className="text-purple-400 text-sm">https://fb.watch/ABC123/</code>
                <p className="text-gray-400 text-xs mt-1">Links curtos do Facebook</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Recursos</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Qualidade HD e SD</p>
                <p className="text-gray-400 text-sm">Duas opções de qualidade em cada download</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Áudio Garantido</p>
                <p className="text-gray-400 text-sm">Todos os downloads incluem áudio</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Thumbnail</p>
                <p className="text-gray-400 text-sm">Imagem de capa do vídeo incluída na resposta</p>
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
                <li>• Apenas vídeos públicos podem ser baixados</li>
                <li>• Vídeos privados ou com restrições de privacidade não estão disponíveis</li>
                <li>• O endpoint batch é exclusivo para planos PRO e PREMIUM</li>
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
                Use a rota <code>/info-only</code> primeiro para verificar se o vídeo está disponível antes de fazer o download.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
