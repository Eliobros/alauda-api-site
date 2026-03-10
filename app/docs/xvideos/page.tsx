// app/docs/xvideos/page.tsx
// Documentação do endpoint XVideos

import CodeBlock from '@/components/CodeBlock';

export default function DocsXVideosPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">XVideos 🔞</h1>
        <p className="text-xl text-gray-400">
          Busca e download de vídeos adultos
        </p>
      </div>

      {/* Buscar Vídeos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Buscar Vídeos</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/xvideos/search</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Busca vídeos no XVideos com filtros de ordenação, data e duração.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">query</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Termo de busca</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">page</td>
                <td className="px-4 py-3 text-gray-400 text-sm">number</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Página de resultados (padrão: 1)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">sort</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Ordenação: views, rating, date</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">date</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Filtro de data: today, week, month, 3month, 6month, year, all</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">duration</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Filtro de duração: 1-3min, 3-10min, 10-20min, 20min_more</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/xvideos/search \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "amateur",
    "page": 1,
    "sort": "rating",
    "date": "month",
    "duration": "10-20min"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "videos": [
      {
        "title": "Título do vídeo",
        "url": "https://www.xvideos.com/video12345/...",
        "thumbnail": "https://img-hw.xvideos-cdn.com/...",
        "duration": "15:30",
        "views": 125000,
        "rating": "94%"
      }
    ],
    "page": 1,
    "total_results": 50,
    "credits_remaining": 4490
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 10 créditos por busca
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
            <code className="text-purple-400">/api/xvideos/download</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Faz o download de um vídeo a partir da URL.
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
                <td className="px-4 py-3 text-gray-400 text-sm">URL do vídeo no XVideos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/xvideos/download \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://www.xvideos.com/video12345/titulo-do-video"
  }'`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const response = await fetch('https://api.alauda.mz/api/xvideos/download', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://www.xvideos.com/video12345/titulo-do-video'
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
    "download_url": "https://storage.alauda.mz/downloads/xvideos/abc123.mp4",
    "title": "Título do vídeo",
    "duration": "15:30",
    "quality": "720p",
    "size": "85.2 MB",
    "credits_remaining": 4440
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 50 créditos por download
          </p>
        </div>
      </section>

      {/* Auto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Busca + Download Automático</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/xvideos/auto</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Busca um vídeo e faz o download automaticamente do primeiro resultado.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">query</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Termo de busca</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/xvideos/auto \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "amateur"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Busca e download realizados com sucesso",
  "data": {
    "download_url": "https://storage.alauda.mz/downloads/xvideos/def456.mp4",
    "title": "Título do vídeo encontrado",
    "duration": "12:45",
    "quality": "720p",
    "size": "72.1 MB",
    "credits_remaining": 4340
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 100 créditos por operação (busca + download combinados)
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Opções de Filtros</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Ordenação (sort)</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">views</code>
                <span className="text-gray-400 text-sm">- Mais visualizados</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">rating</code>
                <span className="text-gray-400 text-sm">- Melhor avaliados</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">date</code>
                <span className="text-gray-400 text-sm">- Mais recentes</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Data (date)</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">today</code>
                <span className="text-gray-400 text-sm">- Hoje</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">week</code>
                <span className="text-gray-400 text-sm">- Esta semana</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">month</code>
                <span className="text-gray-400 text-sm">- Este mês</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">3month</code>
                <span className="text-gray-400 text-sm">- 3 meses</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">6month</code>
                <span className="text-gray-400 text-sm">- 6 meses</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">year</code>
                <span className="text-gray-400 text-sm">- Este ano</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">all</code>
                <span className="text-gray-400 text-sm">- Todos</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Duração (duration)</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">1-3min</code>
                <span className="text-gray-400 text-sm">- 1 a 3 minutos</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">3-10min</code>
                <span className="text-gray-400 text-sm">- 3 a 10 minutos</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">10-20min</code>
                <span className="text-gray-400 text-sm">- 10 a 20 minutos</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="text-purple-400 text-sm">20min_more</code>
                <span className="text-gray-400 text-sm">- Mais de 20 minutos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Alertas */}
      <div className="space-y-4">
        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-red-400 text-xl">🔞</div>
            <div>
              <h3 className="text-red-400 font-semibold mb-1">Conteúdo Adulto</h3>
              <p className="text-gray-300 text-sm">
                Este endpoint contém conteúdo adulto e é restrito a maiores de 18 anos. 
                Ao utilizar esta API, você confirma ter idade legal.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-yellow-400 text-xl">⚠️</div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-1">Acesso Restrito</h3>
              <p className="text-gray-300 text-sm">
                Este endpoint está disponível apenas para usuários com planos <strong className="text-purple-400">PRO</strong> e <strong className="text-yellow-400">PREMIUM</strong>. 
                Usuários do plano gratuito não têm acesso a esta funcionalidade.
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
                Use a rota <code>/auto</code> para uma experiência simplificada. 
                Para mais controle sobre os resultados, use <code>/search</code> seguido de <code>/download</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}