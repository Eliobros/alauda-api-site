// app/docs/lyrics/page.tsx
// Documentação do endpoint Lyrics

import CodeBlock from '@/components/CodeBlock';

export default function DocsLyricsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Lyrics 🎤</h1>
        <p className="text-xl text-gray-400">
          Busca de letras de músicas
        </p>
      </div>

      {/* Buscar Letra */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Buscar Letra</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/lyrics/search</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Busca a letra de uma música por artista e título.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">artist</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Nome do artista</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">title</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Título da música</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/lyrics/search \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "artist": "The Weeknd",
    "title": "Blinding Lights"
  }'`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const response = await fetch('https://alauda-api.mozhost.shop/api/lyrics/search', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    artist: 'The Weeknd',
    title: 'Blinding Lights'
  })
});

const data = await response.json();
console.log(data.data.lyrics);`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "artist": "The Weeknd",
    "title": "Blinding Lights",
    "lyrics": "I've been tryna call\\nI've been on my own for long enough...",
    "album": "After Hours",
    "release_date": "2019-11-29",
    "cover": "https://images.genius.com/...",
    "genius_url": "https://genius.com/The-weeknd-blinding-lights-lyrics",
    "language": "en"
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 1 crédito por requisição
          </p>
        </div>
      </section>

      {/* Sugestões */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Buscar Sugestões</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/lyrics/suggestions</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Busca sugestões de músicas via Genius a partir de uma query de texto.
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
                <td className="px-4 py-3 text-gray-400 text-sm">Texto de busca (nome da música, artista, trecho)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/lyrics/suggestions \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "Blinding Lights"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "suggestions": [
      {
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "genius_url": "https://genius.com/The-weeknd-blinding-lights-lyrics",
        "cover": "https://images.genius.com/..."
      },
      {
        "title": "Blinding Lights (Remix)",
        "artist": "The Weeknd & Rosalía",
        "genius_url": "https://genius.com/The-weeknd-and-rosalia-blinding-lights-remix-lyrics",
        "cover": "https://images.genius.com/..."
      }
    ]
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
        <h2 className="text-2xl font-bold text-white mb-4">Busca em Lote</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/lyrics/batch</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Busca letras de múltiplas músicas de uma vez. Máximo de <strong className="text-white">10 músicas</strong> por requisição.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">songs</td>
                <td className="px-4 py-3 text-gray-400 text-sm">object[]</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">{"Array de objetos {artist, title} (máx. 10)"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/lyrics/batch \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "songs": [
      { "artist": "The Weeknd", "title": "Blinding Lights" },
      { "artist": "Adele", "title": "Hello" },
      { "artist": "Ed Sheeran", "title": "Shape of You" }
    ]
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Busca em lote realizada com sucesso",
  "data": {
    "results": [
      {
        "artist": "The Weeknd",
        "title": "Blinding Lights",
        "lyrics": "I've been tryna call...",
        "status": "success"
      },
      {
        "artist": "Adele",
        "title": "Hello",
        "lyrics": "Hello, it's me...",
        "status": "success"
      },
      {
        "artist": "Ed Sheeran",
        "title": "Shape of You",
        "lyrics": "The club isn't the best place...",
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
            <strong>Custo:</strong> 1 crédito por música no lote
          </p>
        </div>
      </section>

      {/* Recursos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Recursos</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Busca por Artista e Título</p>
                <p className="text-gray-400 text-sm">Encontre letras com precisão usando artista e título da música</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Metadados do Genius</p>
                <p className="text-gray-400 text-sm">Álbum, data de lançamento, capa e link do Genius inclusos</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Múltiplos Idiomas</p>
                <p className="text-gray-400 text-sm">Suporte a letras em português, inglês, espanhol e outros idiomas</p>
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
                <li>• Algumas músicas menos conhecidas podem não estar disponíveis</li>
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
                Use o endpoint <code>/suggestions</code> para encontrar o artista e título corretos antes de buscar a letra completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
