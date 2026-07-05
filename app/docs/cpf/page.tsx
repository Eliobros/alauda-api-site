// app/docs/cpf/page.tsx
// Documentação do endpoint CPF

import CodeBlock from '@/components/CodeBlock';

export default function DocsCPFPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">CPF 🇧🇷</h1>
        <p className="text-xl text-gray-400">
          Consulta de dados de CPF brasileiro
        </p>
      </div>

      {/* Consultar CPF */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Consultar CPF</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/cpf/consultar</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Consulta dados completos de um CPF brasileiro.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">cpf</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Número do CPF (com ou sem formatação)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/cpf/consultar \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "cpf": "123.456.789-00"
  }'`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const response = await fetch('https://alauda-api.mozhost.shop/api/cpf/consultar', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    cpf: '123.456.789-00'
  })
});

const data = await response.json();
console.log(data.data.nome_completo);`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "cpf": "123.456.789-00",
    "nome_completo": "FULANO DE TAL SILVA",
    "situacao_cadastral": "Regular",
    "data_nascimento": "01/01/1990",
    "digito_verificador": "00",
    "comprovante_emitido": "2024-01-15T10:30:00Z",
    "fonte": "Receita Federal",
    "credits_remaining": 4950
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 50 créditos por consulta
          </p>
        </div>
      </section>

      {/* Validar CPF */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Validar CPF</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/cpf/validar</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Valida o formato de um CPF sem consumir créditos. Verifica se os dígitos verificadores estão corretos.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">cpf</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Número do CPF para validação</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/cpf/validar \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "cpf": "123.456.789-00"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "cpf": "123.456.789-00",
    "valido": true,
    "formatado": "123.456.789-00"
  }
}`}
        />

        <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 mt-4">
          <p className="text-green-400 text-sm">
            <strong>Custo:</strong> Gratuito — sem consumo de créditos
          </p>
        </div>
      </section>

      {/* Batch */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Consulta em Lote</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/cpf/batch</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Consulta múltiplos CPFs de uma vez. Máximo de <strong className="text-white">10 CPFs</strong> por requisição.
        </p>

        <div className="bg-purple-500/10 border border-purple-500/50 rounded-lg p-4 mb-4">
          <p className="text-purple-400 text-sm">
            <strong>🔒 Apenas plano PREMIUM</strong>
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">cpfs</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string[]</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Array de CPFs (máx. 10)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/cpf/batch \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "cpfs": [
      "123.456.789-00",
      "987.654.321-00",
      "111.222.333-44"
    ]
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Consulta em lote realizada com sucesso",
  "data": {
    "results": [
      {
        "cpf": "123.456.789-00",
        "nome_completo": "FULANO DE TAL SILVA",
        "situacao_cadastral": "Regular",
        "data_nascimento": "01/01/1990",
        "status": "success"
      },
      {
        "cpf": "987.654.321-00",
        "nome_completo": "CICLANO DE TAL SOUZA",
        "situacao_cadastral": "Regular",
        "data_nascimento": "15/06/1985",
        "status": "success"
      }
    ],
    "total": 3,
    "successful": 3,
    "credits_remaining": 4850
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 50 créditos por CPF no lote
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
                <p className="text-white font-semibold">Validação de Formato</p>
                <p className="text-gray-400 text-sm">Verificação dos dígitos verificadores do CPF</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Nome Completo</p>
                <p className="text-gray-400 text-sm">Retorna o nome completo vinculado ao CPF</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Situação Cadastral</p>
                <p className="text-gray-400 text-sm">Verifica se o CPF está regular, suspenso, cancelado, etc.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Data de Nascimento</p>
                <p className="text-gray-400 text-sm">Data de nascimento do titular do CPF</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Múltiplas Fontes</p>
                <p className="text-gray-400 text-sm">Dados obtidos via Brasil API e Receita Federal</p>
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
                <li>• Apenas CPFs brasileiros são suportados</li>
                <li>• A consulta completa requer plano PRO ou PREMIUM</li>
                <li>• O endpoint batch é exclusivo para o plano PREMIUM</li>
                <li>• Dados sujeitos à disponibilidade das fontes (Brasil API / Receita Federal)</li>
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
                Use o endpoint <code>/validar</code> gratuitamente para verificar o formato do CPF antes de gastar créditos com a consulta completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
