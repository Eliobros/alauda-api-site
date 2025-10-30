// app/docs/removebg/page.tsx
// Documentação do endpoint Remove Background

import CodeBlock from '@/components/CodeBlock';

export default function DocsRemoveBGPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Remove Background 🖼️</h1>
        <p className="text-xl text-gray-400">
          Remoção automática de fundo de imagens usando IA
        </p>
      </div>

      {/* Upload */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Upload de Imagem</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/remove/background</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Remove o fundo de uma imagem via upload direto.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">image</td>
                <td className="px-4 py-3 text-gray-400 text-sm">file</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Imagem (JPG, PNG, WEBP, BMP) - Máx: 12MB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Qualidade por Plano</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4">
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-gray-500">•</span>
              <span><strong className="text-white">Free:</strong> Preview (baixa resolução)</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-blue-400">•</span>
              <span><strong className="text-white">Basic:</strong> Regular</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-purple-400">•</span>
              <span><strong className="text-white">Pro:</strong> HD</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-yellow-400">•</span>
              <span><strong className="text-white">Premium:</strong> 4K/Ultra HD</span>
            </li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/remove/background \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -F "image=@/caminho/para/imagem.jpg"`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (FormData)"
          code={`const formData = new FormData();
formData.append('image', imageFile); // imageFile é um File object

const response = await fetch('https://api.alauda.mz/api/remove/background', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui'
  },
  body: formData
});

const data = await response.json();
console.log(data.data.download_url);`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta de Sucesso</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Fundo removido com sucesso",
  "data": {
    "download_url": "https://storage.alauda.mz/removebg/abc123.png",
    "thumbnail": "https://storage.alauda.mz/removebg/abc123_thumb.png",
    "width": 1920,
    "height": 1080,
    "size": 2450000,
    "size_mb": "2.45",
    "format": "png",
    "quality": "hd",
    "cloudinary_id": "alauda-api/removed-backgrounds/bg-removed-123",
    "credits_remaining": 4710
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 10 créditos por imagem
          </p>
        </div>
      </section>

      {/* URL */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Remover Fundo via URL</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/remove/background-url</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Remove o fundo de uma imagem fornecendo uma URL.
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
                <td className="px-4 py-3 text-gray-400 text-sm">URL direta da imagem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/remove/background-url \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://exemplo.com/imagem.jpg"
  }'`}
        />
      </section>

      {/* Formatos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Formatos Suportados</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JPG', 'PNG', 'WEBP', 'BMP'].map((format) => (
            <div key={format} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🖼️</div>
              <p className="text-white font-semibold">{format}</p>
            </div>
          ))}
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
                <p className="text-white font-semibold">IA Avançada</p>
                <p className="text-gray-400 text-sm">Usa tecnologia Remove.bg para remoção precisa</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Formato PNG</p>
                <p className="text-gray-400 text-sm">Saída em PNG com canal alpha (transparência)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Qualidade Variável</p>
                <p className="text-gray-400 text-sm">Qualidade melhora conforme seu plano</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Processamento Rápido</p>
                <p className="text-gray-400 text-sm">Resultados em menos de 10 segundos</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Thumbnail Incluído</p>
                <p className="text-gray-400 text-sm">Preview em 300x300px para visualização rápida</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Casos de Uso</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">👤</div>
            <h3 className="text-lg font-semibold text-white mb-2">Fotos de Perfil</h3>
            <p className="text-sm text-gray-400">
              Crie avatares profissionais removendo fundos indesejados
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🛍️</div>
            <h3 className="text-lg font-semibold text-white mb-2">E-commerce</h3>
            <p className="text-sm text-gray-400">
              Prepare fotos de produtos com fundo limpo
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold text-white mb-2">Design Gráfico</h3>
            <p className="text-sm text-gray-400">
              Isole elementos para composições criativas
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-semibold text-white mb-2">Redes Sociais</h3>
            <p className="text-sm text-gray-400">
              Crie conteúdo profissional para posts e stories
            </p>
          </div>
        </div>
      </section>

      {/* Comparação de Qualidade */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Comparação de Qualidade</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Plano
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Qualidade
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Resolução Máxima
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase">
                  Uso Recomendado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-4 py-3 text-white font-semibold">Free</td>
                <td className="px-4 py-3 text-gray-400">Preview</td>
                <td className="px-4 py-3 text-gray-400">400x300px</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Testes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-white font-semibold">Basic</td>
                <td className="px-4 py-3 text-blue-400">Regular</td>
                <td className="px-4 py-3 text-gray-400">1500x1000px</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Web, Social Media</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-white font-semibold">Pro</td>
                <td className="px-4 py-3 text-purple-400">HD</td>
                <td className="px-4 py-3 text-gray-400">4000x3000px</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Impressão, Design</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-white font-semibold">Premium</td>
                <td className="px-4 py-3 text-yellow-400">4K/Ultra HD</td>
                <td className="px-4 py-3 text-gray-400">Original completo</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Profissional, Publicidade</td>
              </tr>
            </tbody>
          </table>
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
                <li>• Tamanho máximo: 12MB por imagem</li>
                <li>• Imagens muito complexas podem ter resultados imperfeitos</li>
                <li>• Fundos muito similares ao objeto principal podem causar problemas</li>
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
                Para melhores resultados, use imagens com boa iluminação e contraste entre o objeto e o fundo.
                Upgrade para obter resoluções maiores e melhor qualidade!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
