// app/docs/shazam/page.tsx
// Documentação do endpoint Shazam

import CodeBlock from '@/components/CodeBlock';

export default function DocsShazamPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Shazam 🎼</h1>
        <p className="text-xl text-gray-400">
          Identificação de músicas via reconhecimento de áudio
        </p>
      </div>

      {/* Identificar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Identificar Música</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/shazam/identify</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Identifica uma música a partir de um arquivo de áudio.
        </p>

        <h3 className="text-lg font-semibold text-white mb-3">Headers</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden mb-4">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Header
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">X-API-Key</td>
                <td className="px-4 py-3 text-gray-400 text-sm">sua_api_key_aqui</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">Content-Type</td>
                <td className="px-4 py-3 text-gray-400 text-sm">multipart/form-data</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Body (Form Data)</h3>
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
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">audio</td>
                <td className="px-4 py-3 text-gray-400 text-sm">file</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Arquivo de áudio (MP3, WAV, M4A, OGG)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/shazam/identify \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -F "audio=@/caminho/para/audio.mp3"`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (FormData)"
          code={`const formData = new FormData();
formData.append('audio', audioFile); // audioFile é um File object

const response = await fetch('https://alauda-api.mozhost.shop/api/shazam/identify', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui'
  },
  body: formData
});

const data = await response.json();
console.log(data.data.title, '-', data.data.artist);`}
        />

        <CodeBlock
          language="python"
          title="Python (requests)"
          code={`import requests

headers = {
    'X-API-Key': 'sua_api_key_aqui'
}

files = {
    'audio': open('audio.mp3', 'rb')
}

response = requests.post(
    'https://alauda-api.mozhost.shop/api/shazam/identify',
    headers=headers,
    files=files
)

result = response.json()
print(f"{result['data']['title']} - {result['data']['artist']}")`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta de Sucesso</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Música identificada com sucesso",
  "data": {
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "album": "After Hours",
    "release_date": "2020",
    "genre": "Synthpop",
    "cover_art": "https://i.scdn.co/image/ab67616d0000b273...",
    "spotify_url": "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    "youtube_url": "https://youtube.com/watch?v=4NRXx6U8ABQ",
    "apple_music_url": "https://music.apple.com/...",
    "shazam_url": "https://www.shazam.com/track/...",
    "credits_remaining": 4720
  }
}`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta (Não Identificada)</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": false,
  "error": "Música não identificada",
  "message": "Não foi possível identificar a música. Tente com um áudio de melhor qualidade."
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 100 créditos por identificação
          </p>
        </div>
      </section>

      {/* Formatos Suportados */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Formatos de Áudio Suportados</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['MP3', 'WAV', 'M4A', 'OGG'].map((format) => (
            <div key={format} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🎵</div>
              <p className="text-white font-semibold">{format}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requisitos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Requisitos do Áudio</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Duração Mínima</p>
                <p className="text-gray-400 text-sm">Pelo menos 10 segundos de áudio</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Qualidade</p>
                <p className="text-gray-400 text-sm">Áudio claro sem muito ruído de fundo</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Tamanho Máximo</p>
                <p className="text-gray-400 text-sm">Até 10 MB por arquivo</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Conteúdo</p>
                <p className="text-gray-400 text-sm">Deve conter música reconhecível (não apenas instrumentais ou sons ambiente)</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Como Funciona</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-lg font-semibold text-white">Upload do Áudio</h3>
            </div>
            <p className="text-gray-400 text-sm ml-11">
              Você envia um arquivo de áudio ou um trecho gravado
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-lg font-semibold text-white">Análise</h3>
            </div>
            <p className="text-gray-400 text-sm ml-11">
              Nossa API processa o áudio e usa o Shazam para identificar a música
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-lg font-semibold text-white">Resultado</h3>
            </div>
            <p className="text-gray-400 text-sm ml-11">
              Você recebe todas as informações da música: título, artista, álbum e links para streaming
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Casos de Uso</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold text-white mb-2">Bots de Música</h3>
            <p className="text-sm text-gray-400">
              Identifique músicas enviadas pelos usuários em bots do WhatsApp, Telegram, Discord, etc.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-semibold text-white mb-2">Apps Mobile</h3>
            <p className="text-sm text-gray-400">
              Adicione funcionalidade de reconhecimento de música em seu aplicativo
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🎧</div>
            <h3 className="text-lg font-semibold text-white mb-2">Playlists Automáticas</h3>
            <p className="text-sm text-gray-400">
              Crie playlists baseadas em músicas identificadas
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
            <p className="text-sm text-gray-400">
              Analise quais músicas estão sendo mais identificadas
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
              <h3 className="text-yellow-400 font-semibold mb-1">Importante</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Nem todas as músicas podem ser identificadas, especialmente remixes não oficiais</li>
                <li>• Áudios com muito ruído ou muito curtos podem não ser reconhecidos</li>
                <li>• O reconhecimento funciona melhor com gravações originais</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-blue-400 text-xl">💡</div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Dica Pro</h3>
              <p className="text-gray-300 text-sm">
                Para melhores resultados, grave pelo menos 15-20 segundos do refrão da música em um ambiente silencioso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
