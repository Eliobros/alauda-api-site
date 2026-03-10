// app/docs/whatsapp/page.tsx
// Documentação do endpoint WhatsApp

import CodeBlock from '@/components/CodeBlock';

export default function DocsWhatsAppPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">WhatsApp 💬</h1>
        <p className="text-xl text-gray-400">
          Integração do Mega-Bot com Alauda API
        </p>
      </div>

      {/* Ativar Grupo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Ativar Grupo</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/whatsapp/activate</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Ativa um grupo do WhatsApp para uso com o Mega-Bot.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">group_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do grupo (formato: 120363xxxxx@g.us)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">api_key</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Chave da API do usuário</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">group_name</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Nome do grupo</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">bot_number</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-yellow-400 text-sm">Não</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Número do bot</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/whatsapp/activate \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "group_id": "120363012345678901@g.us",
    "api_key": "sua_api_key_aqui",
    "group_name": "Meu Grupo",
    "bot_number": "258840000000"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Grupo ativado com sucesso",
  "data": {
    "group_id": "120363012345678901@g.us",
    "group_name": "Meu Grupo",
    "status": "active",
    "activated_at": "2024-01-15T10:30:00Z"
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> Sem consumo de créditos
          </p>
        </div>
      </section>

      {/* Validar Grupo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Validar Grupo e Créditos</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/whatsapp/validate</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Valida se o grupo está ativo e se o usuário possui créditos suficientes.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">group_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do grupo do WhatsApp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/whatsapp/validate \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "group_id": "120363012345678901@g.us"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "group_id": "120363012345678901@g.us",
    "active": true,
    "credits_available": 4500,
    "plan": "PRO"
  }
}`}
        />
      </section>

      {/* Consumir Créditos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Consumir Créditos</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/whatsapp/consume</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Consome créditos do usuário associado ao grupo para uma operação do bot.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">group_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do grupo do WhatsApp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/whatsapp/consume \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "group_id": "120363012345678901@g.us"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Créditos consumidos com sucesso",
  "data": {
    "credits_consumed": 50,
    "credits_remaining": 4450
  }
}`}
        />

        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 text-sm">
            <strong>Custo:</strong> 50 créditos por operação
          </p>
        </div>
      </section>

      {/* Desativar Grupo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Desativar Grupo</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/whatsapp/deactivate</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Desativa um grupo do WhatsApp, removendo a integração com o Mega-Bot.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">group_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do grupo do WhatsApp</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">api_key</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Chave da API do usuário</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.alauda.mz/api/whatsapp/deactivate \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "group_id": "120363012345678901@g.us",
    "api_key": "sua_api_key_aqui"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Grupo desativado com sucesso",
  "data": {
    "group_id": "120363012345678901@g.us",
    "status": "inactive",
    "deactivated_at": "2024-01-15T12:00:00Z"
  }
}`}
        />
      </section>

      {/* Status do Grupo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Status do Grupo</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
              GET
            </span>
            <code className="text-purple-400">/api/whatsapp/status/:group_id</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Retorna o status atual de um grupo ativado.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">group_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do grupo (parâmetro na URL)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.alauda.mz/api/whatsapp/status/120363012345678901@g.us" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "group_id": "120363012345678901@g.us",
    "group_name": "Meu Grupo",
    "status": "active",
    "owner": "usuario@email.com",
    "credits_remaining": 4450,
    "activated_at": "2024-01-15T10:30:00Z",
    "total_operations": 125
  }
}`}
        />
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Funcionalidades</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Ativação de Grupos</p>
                <p className="text-gray-400 text-sm">Ative grupos do WhatsApp para integração com o Mega-Bot</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Validação de Créditos</p>
                <p className="text-gray-400 text-sm">Verifique se o grupo está ativo e possui créditos antes de cada operação</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-semibold">Consumo por Operação</p>
                <p className="text-gray-400 text-sm">Cada operação do bot consome 50 créditos da conta do usuário</p>
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
              <h3 className="text-yellow-400 font-semibold mb-1">Formato do Group ID</h3>
              <p className="text-gray-300 text-sm">
                O ID do grupo deve seguir o formato do WhatsApp: <code className="text-purple-400">120363xxxxx@g.us</code>. 
                Certifique-se de usar o ID correto ao ativar ou consultar grupos.
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
                Use a rota <code>/validate</code> antes de cada operação para garantir que o grupo está ativo e possui créditos suficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}