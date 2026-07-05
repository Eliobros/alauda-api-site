// app/docs/youtube/page.tsx
// Documentação do endpoint YouTube

import CodeBlock from '@/components/CodeBlock';

export default function DocsYouTubePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">YouTube 📺</h1>
        <p className="text-xl text-gray-400">
          Download de vídeos e áudio do YouTube
        </p>
      </div>

      {/* Obter Informações */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Obter Informações do Vídeo</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
              GET
            </span>
            <code className="text-purple-400">/api/youtube/info</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Retorna metadados do vídeo sem fazer download.
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
                <td className="px-4 py-3 text-gray-400 text-sm">URL do vídeo do YouTube</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X GET "https://alauda-api.mozhost.shop/api/youtube/info?url=https://youtube.com/watch?v=dQw4w9WgXcQ" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "title": "Rick Astley - Never Gonna Give You Up",
    "author": "Rick Astley",
    "duration": "3:33",
    "views": "1.4B",
    "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    "description": "Official video...",
    "upload_date": "2009-10-25"
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
        <h2 className="text-2xl font-bold text-white mb-4">Download de Vídeo/Áudio</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/youtube/download</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Faz download do vídeo ou áudio em diversos formatos.
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
                <td className="px-4 py-3 text-gray-400 text-sm">URL do vídeo</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">format</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">mp4 ou mp3 (padrão: mp4)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">quality</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">360p, 480p, 720p, 1080p</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
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

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const response = await fetch('https://alauda-api.mozhost.shop/api/youtube/download', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
    format: 'mp4',
    quality: '720p'
  })
});

const data = await response.json();
console.log(data.data.download_url);`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Download realizado com sucesso",
  "data": {
    "download_url": "https://storage.alauda.mz/downloads/abc123.mp4",
    "title": "Rick Astley - Never Gonna Give You Up",
    "format": "mp4",
    "quality": "720p",
    "size": "25.4 MB",
    "duration": "3:33",
    "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    "credits_remaining": 4950
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 50 créditos por download
          </p>
        </div>
      </section>

      {/* Formatos Suportados */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Formatos e Qualidades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Formatos</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>MP4</strong> - Vídeo com áudio</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>MP3</strong> - Apenas áudio</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Qualidades</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>360p</strong> - Baixa</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>480p</strong> - Média</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>720p</strong> - HD</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>1080p</strong> - Full HD</span>
              </li>
            </ul>
          </div>
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
                <li>• Tamanho máximo: Vídeos de até 2 horas</li>
                <li>• Alguns vídeos com restrições podem não estar disponíveis</li>
                <li>• O download pode levar alguns segundos dependendo do tamanho</li>
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
                Use <code>format: "mp3"</code> para baixar apenas o áudio e economizar créditos e largura de banda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
