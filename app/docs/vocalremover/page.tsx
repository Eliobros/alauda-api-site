// app/docs/vocalremover/page.tsx
// Documentação do endpoint Vocal Remover

import CodeBlock from '@/components/CodeBlock';

export default function DocsVocalRemoverPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Vocal Remover 🎵</h1>
        <p className="text-xl text-gray-400">
          Separação de vocais e instrumentais usando IA (Spleeter)
        </p>
      </div>

      {/* Separar via Upload */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Separar via Upload</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/vocalremove/separate</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Envia um arquivo de áudio via upload para separação de vocais e instrumentais.
        </p>

        <h3 className="text-lg font-semibold text-white mb-3">Body (multipart/form-data)</h3>
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">audio</td>
                <td className="px-4 py-3 text-gray-400 text-sm">file</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Arquivo de áudio (MP3, WAV, OGG, FLAC, M4A — máx. 50MB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/vocalremove/separate \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -F "audio=@musica.mp3"`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const formData = new FormData();
formData.append('audio', fileInput.files[0]);

const response = await fetch('https://api.alauda.mz/api/vocalremove/separate', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui'
  },
  body: formData
});

const data = await response.json();
console.log(data.data.stems);`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Separação realizada com sucesso",
  "data": {
    "stems": {
      "vocals": "https://storage.alauda.mz/downloads/vocalremove/abc123_vocals.mp3",
      "instrumental": "https://storage.alauda.mz/downloads/vocalremove/abc123_instrumental.mp3"
    },
    "original_filename": "musica.mp3",
    "duration": "3:45",
    "format": "mp3",
    "stems_count": 2,
    "credits_remaining": 4985
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 15 créditos por requisição
          </p>
        </div>
      </section>

      {/* Separar via URL */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Separar via URL</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/vocalremove/separate-url</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Envia uma URL de áudio para separação de vocais e instrumentais.
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
                <td className="px-4 py-3 text-gray-400 text-sm">URL direta do arquivo de áudio</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/vocalremove/separate-url \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/audio/musica.mp3"
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
    'url': 'https://example.com/audio/musica.mp3'
}

response = requests.post(
    'https://api.alauda.mz/api/vocalremove/separate-url',
    headers=headers,
    json=data
)

result = response.json()
print(result['data']['stems'])`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Separação realizada com sucesso",
  "data": {
    "stems": {
      "vocals": "https://storage.alauda.mz/downloads/vocalremove/def456_vocals.mp3",
      "drums": "https://storage.alauda.mz/downloads/vocalremove/def456_drums.mp3",
      "bass": "https://storage.alauda.mz/downloads/vocalremove/def456_bass.mp3",
      "other": "https://storage.alauda.mz/downloads/vocalremove/def456_other.mp3"
    },
    "duration": "4:12",
    "format": "mp3",
    "stems_count": 4,
    "credits_remaining": 4970
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 15 créditos por requisição
          </p>
        </div>
      </section>

      {/* Stems por Plano */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Stems por Plano</h2>
        
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-2 border-purple-500 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎛️</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Quantidade de Stems por Plano</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded text-sm font-bold">
                      Free / Basic
                    </span>
                    <span className="text-white font-semibold">2 stems</span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• Vocals</li>
                    <li>• Instrumental</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-bold">
                      Pro
                    </span>
                    <span className="text-white font-semibold">4 stems</span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• Vocals</li>
                    <li>• Drums</li>
                    <li>• Bass</li>
                    <li>• Other</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm font-bold">
                      Premium
                    </span>
                    <span className="text-white font-semibold">5 stems</span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• Vocals</li>
                    <li>• Drums</li>
                    <li>• Bass</li>
                    <li>• Piano</li>
                    <li>• Other</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos Suportados */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Formatos Suportados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Entrada</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>MP3</strong> - MPEG Audio Layer 3</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>WAV</strong> - Waveform Audio</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>OGG</strong> - Ogg Vorbis</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>FLAC</strong> - Free Lossless Audio</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>M4A</strong> - MPEG-4 Audio</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Limites</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>Tamanho máximo:</strong> 50MB</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>Motor IA:</strong> Spleeter</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">•</span>
                <span><strong>Saída:</strong> MP3</span>
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
                <li>• Tamanho máximo do arquivo: 50MB</li>
                <li>• O processamento pode levar alguns segundos dependendo do tamanho do arquivo</li>
                <li>• A qualidade da separação depende da complexidade da música</li>
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
                Para melhores resultados, envie arquivos de alta qualidade (WAV ou FLAC). Use o endpoint <code>/separate-url</code> para evitar upload de arquivos grandes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
