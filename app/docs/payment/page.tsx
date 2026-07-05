// app/docs/payment/page.tsx
// Documentação do sistema de pagamentos

import CodeBlock from '@/components/CodeBlock';

export default function DocsPaymentPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Pagamentos 💳</h1>
        <p className="text-xl text-gray-400">
          Sistema de pagamentos integrado - MercadoPago, M-Pesa, E-Mola
        </p>
      </div>

      {/* MercadoPago */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Pagamento via MercadoPago</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/payment/mercadopago</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Cria um pagamento via MercadoPago para usuários no Brasil e América Latina.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">email</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Email do pagador</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">amount</td>
                <td className="px-4 py-3 text-gray-400 text-sm">number</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Valor do pagamento</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">description</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Descrição do pagamento</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">usuario_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do usuário na plataforma</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/payment/mercadopago \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "usuario@email.com",
    "amount": 29.90,
    "description": "Plano PRO - Alauda API",
    "usuario_id": "user_123"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Pagamento criado com sucesso",
  "data": {
    "payment_id": "mp_1234567890",
    "status": "pending",
    "payment_url": "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=...",
    "amount": 29.90,
    "currency": "BRL",
    "created_at": "2024-01-15T10:30:00Z"
  }
}`}
        />
      </section>

      {/* M-Pesa */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Pagamento via M-Pesa</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/payment/mpesa</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Cria um pagamento via M-Pesa (Vodacom Moçambique).
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">valor</td>
                <td className="px-4 py-3 text-gray-400 text-sm">number</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Valor do pagamento (MZN)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">numero_celular</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Número Vodacom (formato: 84xxxxxxx)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">usuario_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do usuário na plataforma</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/payment/mpesa \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "valor": 500,
    "numero_celular": "841234567",
    "usuario_id": "user_123"
  }'`}
        />

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const response = await fetch('https://alauda-api.mozhost.shop/api/payment/mpesa', {
  method: 'POST',
  headers: {
    'X-API-Key': 'sua_api_key_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    valor: 500,
    numero_celular: '841234567',
    usuario_id: 'user_123'
  })
});

const data = await response.json();
console.log(data.data.transaction_id);`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Pagamento M-Pesa iniciado",
  "data": {
    "transaction_id": "mpesa_abc123",
    "status": "pending",
    "valor": 500,
    "numero_celular": "841234567",
    "currency": "MZN",
    "created_at": "2024-01-15T10:30:00Z"
  }
}`}
        />
      </section>

      {/* E-Mola */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Pagamento via E-Mola</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-bold">
              POST
            </span>
            <code className="text-purple-400">/api/payment/emola</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Cria um pagamento via E-Mola (Movitel Moçambique).
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">valor</td>
                <td className="px-4 py-3 text-gray-400 text-sm">number</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Valor do pagamento (MZN)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">numero_celular</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">Número Movitel (formato: 86xxxxxxx ou 87xxxxxxx)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">usuario_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do usuário na plataforma</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X POST https://alauda-api.mozhost.shop/api/payment/emola \\
  -H "X-API-Key: sua_api_key_aqui" \\
  -H "Content-Type: application/json" \\
  -d '{
    "valor": 500,
    "numero_celular": "861234567",
    "usuario_id": "user_123"
  }'`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "message": "Pagamento E-Mola iniciado",
  "data": {
    "transaction_id": "emola_xyz789",
    "status": "pending",
    "valor": 500,
    "numero_celular": "861234567",
    "currency": "MZN",
    "created_at": "2024-01-15T10:30:00Z"
  }
}`}
        />
      </section>

      {/* Status do Pagamento */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Status do Pagamento</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
              GET
            </span>
            <code className="text-purple-400">/api/payment/mercadopago/status/:payment_id</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Consulta o status de um pagamento MercadoPago.
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
                <td className="px-4 py-3 text-purple-400 font-mono text-sm">payment_id</td>
                <td className="px-4 py-3 text-gray-400 text-sm">string</td>
                <td className="px-4 py-3 text-green-400 text-sm">Sim</td>
                <td className="px-4 py-3 text-gray-400 text-sm">ID do pagamento (parâmetro na URL)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X GET "https://alauda-api.mozhost.shop/api/payment/mercadopago/status/mp_1234567890" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "payment_id": "mp_1234567890",
    "status": "approved",
    "amount": 29.90,
    "currency": "BRL",
    "credits_added": 5000,
    "approved_at": "2024-01-15T10:35:00Z"
  }
}`}
        />
      </section>

      {/* Meus Pagamentos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Listar Meus Pagamentos</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
              GET
            </span>
            <code className="text-purple-400">/api/payment/my-payments</code>
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          Lista todos os pagamentos do usuário autenticado.
        </p>

        <h3 className="text-lg font-semibold text-white mb-3">Exemplo de Requisição</h3>
        <CodeBlock
          language="bash"
          code={`curl -X GET "https://alauda-api.mozhost.shop/api/payment/my-payments" \\
  -H "X-API-Key: sua_api_key_aqui"`}
        />

        <h3 className="text-lg font-semibold text-white mb-3">Resposta</h3>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "payments": [
      {
        "payment_id": "mp_1234567890",
        "provider": "mercadopago",
        "amount": 29.90,
        "currency": "BRL",
        "status": "approved",
        "credits_added": 5000,
        "created_at": "2024-01-15T10:30:00Z"
      },
      {
        "payment_id": "mpesa_abc123",
        "provider": "mpesa",
        "amount": 500,
        "currency": "MZN",
        "status": "approved",
        "credits_added": 3000,
        "created_at": "2024-01-10T14:20:00Z"
      }
    ],
    "total": 2
  }
}`}
        />
      </section>

      {/* Provedores */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Provedores Disponíveis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">💙</div>
            <h3 className="text-lg font-semibold text-white mb-2">MercadoPago</h3>
            <p className="text-sm text-gray-400">
              Brasil e América Latina. Aceita cartão de crédito, boleto e PIX.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🔴</div>
            <h3 className="text-lg font-semibold text-white mb-2">M-Pesa</h3>
            <p className="text-sm text-gray-400">
              Vodacom Moçambique. Pagamento via carteira móvel (84xxxxxxx).
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🟢</div>
            <h3 className="text-lg font-semibold text-white mb-2">E-Mola</h3>
            <p className="text-sm text-gray-400">
              Movitel Moçambique. Pagamento via carteira móvel (86xxxxxxx / 87xxxxxxx).
            </p>
          </div>
        </div>
      </section>

      {/* Alertas */}
      <div className="space-y-4">
        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-blue-400 text-xl">💡</div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Créditos Automáticos</h3>
              <p className="text-gray-300 text-sm">
                Os créditos são adicionados automaticamente à sua conta após o pagamento ser aprovado. 
                Não é necessário nenhuma ação adicional.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-yellow-400 text-xl">⚠️</div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-1">Importante</h3>
              <p className="text-gray-300 text-sm">
                As rotas de pagamento <strong>não consomem créditos da API</strong>. 
                Os créditos são adicionados à conta do usuário após o pagamento ser aprovado pelo provedor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}