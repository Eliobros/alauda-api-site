// app/docs/tina/page.tsx
// Documentação do endpoint Tina AI

import CodeBlock from '@/components/CodeBlock';

export default function DocsTinaPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Tina AI 🤖</h1>
        <p className="text-xl text-gray-400">
          Assistente de IA conversacional powered by Gemini 2.5 Flash
        </p>
      </div>

      {/* Nova Sessão */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Criar Nova Sessão</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/tina/session/new</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Cria uma nova sessão de conversa com a Tina AI.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">session_name</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Nome personalizado para a sessão</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/tina/session/new \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "session_name": "Conversa sobre programação"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Sessão criada com sucesso",
  "data": {
    "session_id": "sess_abc123xyz",
    "session_name": "Conversa sobre programação",
    "created_at": "2024-01-15T10:30:00Z",
    "expires_at": "2024-01-15T12:30:00Z"
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> Sem consumo de créditos
          </p>
        </div>
      </section>

      {/* Enviar Mensagem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Enviar Mensagem</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/tina/chat</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Envia uma mensagem para a Tina AI e recebe a resposta.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">session_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID da sessão de conversa</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">message</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Mensagem do usuário (máx. 10.000 caracteres)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/tina/chat \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "session_id": "sess_abc123xyz",
    "message": "Como criar uma API REST com Node.js?"
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
    'session_id': 'sess_abc123xyz',
    'message': 'Como criar uma API REST com Node.js?'
}

response = requests.post(
    'https://alauda-api.mozhost.shop/api/tina/chat',
    headers=headers,
    json=data
)

result = response.json()
print(result['data']['response'])`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "response": "Para criar uma API REST com Node.js, você pode usar o framework Express...",
    "session_id": "sess_abc123xyz",
    "message_count": 3,
    "credits_remaining": 4495
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 5 créditos por mensagem
          </p>
        </div>
      </section>

      {/* Listar Sessões */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Listar Sessões</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
              GET
            </span>
            <code className="text-purple-400">/api/tina/sessions</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Lista todas as sessões de conversa do usuário.
        </p>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X GET "https://alauda-api.mozhost.shop/api/tina/sessions" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "sessions": [
      {
        "session_id": "sess_abc123xyz",
        "session_name": "Conversa sobre programação",
        "message_count": 12,
        "created_at": "2024-01-15T10:30:00Z",
        "last_activity": "2024-01-15T11:45:00Z"
      },
      {
        "session_id": "sess_def456uvw",
        "session_name": "Ajuda com matemática",
        "message_count": 5,
        "created_at": "2024-01-14T09:00:00Z",
        "last_activity": "2024-01-14T09:30:00Z"
      }
    ],
    "total": 2
  }
}`}
        />
      </section>

      {/* Histórico */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Buscar Histórico</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
              GET
            </span>
            <code className="text-purple-400">/api/tina/history/:session_id</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Retorna o histórico de mensagens de uma sessão (últimas 20 mensagens).
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">session_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID da sessão (parâmetro na URL)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X GET "https://alauda-api.mozhost.shop/api/tina/history/sess_abc123xyz" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "session_id": "sess_abc123xyz",
    "messages": [
      {
        "role": "user",
        "content": "Olá, Tina!",
        "timestamp": "2024-01-15T10:31:00Z"
      },
      {
        "role": "assistant",
        "content": "Olá! Como posso te ajudar hoje?",
        "timestamp": "2024-01-15T10:31:02Z"
      }
    ],
    "total_messages": 2
  }
}`}
        />
      </section>

      {/* Deletar Sessão */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Deletar Sessão</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded text-sm font-bold">
              DELETE
            </span>
            <code className="text-purple-400">/api/tina/session/:session_id</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Deleta uma sessão de conversa e todo o seu histórico.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">session_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID da sessão (parâmetro na URL)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X DELETE "https://alauda-api.mozhost.shop/api/tina/session/sess_abc123xyz" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Sessão deletada com sucesso"
}`}
        />
      </section>

      {/* Stats da Sessão */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Stats da Sessão</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
              GET
            </span>
            <code className="text-purple-400">/api/tina/stats/:session_id</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Retorna estatísticas detalhadas de uma sessão de conversa.
        </p>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X GET "https://alauda-api.mozhost.shop/api/tina/stats/sess_abc123xyz" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "session_id": "sess_abc123xyz",
    "session_name": "Conversa sobre programação",
    "total_messages": 12,
    "user_messages": 6,
    "assistant_messages": 6,
    "total_credits_used": 30,
    "created_at": "2024-01-15T10:30:00Z",
    "last_activity": "2024-01-15T11:45:00Z"
  }
}`}
        />
      </section>

      {/* Funcionalidades */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Funcionalidades</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Conversas com Histórico</p>
                <p className="text-gray-400 text-sm">A Tina mantém o contexto da conversa usando as últimas 20 mensagens</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Múltiplas Sessões</p>
                <p className="text-gray-400 text-sm">Crie várias sessões para diferentes conversas ou temas</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Mensagens Longas</p>
                <p className="text-gray-400 text-sm">Suporte para mensagens de até 10.000 caracteres</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Limpeza Automática</p>
                <p className="text-gray-400 text-sm">Sessões inativas são removidas automaticamente após 2 horas</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Alertas */}
      <div className="space-y-4">
        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-blue-400 text-xl">🤖</div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Powered by Gemini 2.5 Flash</h3>
              <p className="text-gray-300 text-sm">
                A Tina AI utiliza o modelo Gemini 2.5 Flash do Google, oferecendo respostas rápidas e inteligentes 
                para uma variedade de perguntas e tarefas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-yellow-400 text-xl">⚠️</div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-1">Limitações</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Máximo de 10.000 caracteres por mensagem</li>
                <li>• Contexto baseado nas últimas 20 mensagens da sessão</li>
                <li>• Sessões expiram após 2 horas de inatividade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}