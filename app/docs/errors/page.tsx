// app/docs/errors/page.tsx
// Documentação de códigos de erro

import CodeBlock from '@/components/CodeBlock';

export default function DocsErrorsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Códigos de Erro ⚠️</h1>
        <p className="text-xl text-gray-400">
          Entenda os erros retornados pela API
        </p>
      </div>

      {/* Estrutura */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Estrutura de Erro</h2>
        <p className="text-gray-400 mb-4">
          Quando ocorre um erro, a API retorna uma resposta no seguinte formato:
        </p>
        
        <CodeBlock
          language="json"
          code={`{
  "success": false,
  "error": "Descrição do erro",
  "message": "Informações adicionais sobre o erro"
}`}
        />
      </section>

      {/* Códigos HTTP */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Códigos de Status HTTP</h2>
        
        <div className="space-y-4">
          {/* 2xx Success */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-400 mb-4">2xx - Sucesso</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-400">200</span>
                  <span className="text-white font-semibold">OK</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  Requisição bem-sucedida. A operação foi completada com sucesso.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": true,
  "message": "Operação realizada com sucesso",
  "data": { ... }
}`}
                />
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-400">201</span>
                  <span className="text-white font-semibold">Created</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Recurso criado com sucesso.
                </p>
              </div>
            </div>
          </div>

          {/* 4xx Client Errors */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">4xx - Erros do Cliente</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-yellow-400">400</span>
                  <span className="text-white font-semibold">Bad Request</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  Requisição inválida ou malformada. Verifique os parâmetros enviados.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": false,
  "error": "URL inválida",
  "message": "A URL fornecida não é válida ou não é suportada"
}`}
                />
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-red-400">401</span>
                  <span className="text-white font-semibold">Unauthorized</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  API Key não fornecida ou inválida.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": false,
  "error": "API key não fornecida"
}

// ou

{
  "success": false,
  "error": "API key inválida"
}`}
                />
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-red-400">402</span>
                  <span className="text-white font-semibold">Payment Required</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  Créditos insuficientes para realizar a operação.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": false,
  "error": "Créditos esgotados. Recarregue sua conta."
}`}
                />
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-red-400">403</span>
                  <span className="text-white font-semibold">Forbidden</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  API Key expirada ou desativada.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": false,
  "error": "API key expirada"
}

// ou

{
  "success": false,
  "error": "API key desativada"
}`}
                />
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-yellow-400">404</span>
                  <span className="text-white font-semibold">Not Found</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  Endpoint não encontrado. Verifique a URL.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": false,
  "error": "Endpoint não encontrado"
}`}
                />
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-yellow-400">429</span>
                  <span className="text-white font-semibold">Too Many Requests</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  Rate limit atingido. Aguarde antes de fazer novas requisições.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": false,
  "error": "Limite de requisições atingido. Tente novamente mais tarde."
}`}
                />
              </div>
            </div>
          </div>

          {/* 5xx Server Errors */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-4">5xx - Erros do Servidor</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-red-400">500</span>
                  <span className="text-white font-semibold">Internal Server Error</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  Erro interno do servidor. Tente novamente mais tarde.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": false,
  "error": "Erro interno do servidor"
}`}
                />
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-red-400">503</span>
                  <span className="text-white font-semibold">Service Unavailable</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  Serviço temporariamente indisponível. Manutenção ou sobrecarga.
                </p>
                <CodeBlock
                  language="json"
                  code={`{
  "success": false,
  "error": "Serviço temporariamente indisponível"
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erros Comuns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Erros Comuns e Soluções</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              ❌ "API key não fornecida"
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              <strong>Causa:</strong> Você não incluiu o header X-API-Key na requisição.
            </p>
            <p className="text-green-400 text-sm font-semibold mb-2">Solução:</p>
            <CodeBlock
              language="bash"
              code={`curl -X POST https://api.alauda.mz/api/... \\
  -H "X-API-Key: sua_api_key_aqui" \\  ← Adicione isso
  -H "Content-Type: application/json"`}
            />
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              ❌ "Créditos esgotados"
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              <strong>Causa:</strong> Sua conta não tem créditos suficientes.
            </p>
            <p className="text-green-400 text-sm font-semibold">Solução:</p>
            <ul className="text-gray-400 text-sm space-y-1 ml-4">
              <li>• Faça upgrade do seu plano</li>
              <li>• Aguarde a renovação mensal</li>
              <li>• Entre em contato para recarregar créditos</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              ❌ "URL inválida"
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              <strong>Causa:</strong> A URL fornecida não é válida ou não é suportada.
            </p>
            <p className="text-green-400 text-sm font-semibold">Solução:</p>
            <ul className="text-gray-400 text-sm space-y-1 ml-4">
              <li>• Verifique se a URL está correta</li>
              <li>• Use URLs completas (com https://)</li>
              <li>• Certifique-se de que é uma URL suportada pela plataforma</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              ❌ "Limite de requisições atingido"
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              <strong>Causa:</strong> Você atingiu o rate limit do seu plano.
            </p>
            <p className="text-green-400 text-sm font-semibold">Solução:</p>
            <ul className="text-gray-400 text-sm space-y-1 ml-4">
              <li>• Aguarde alguns minutos antes de tentar novamente</li>
              <li>• Faça upgrade para um plano com rate limit maior</li>
              <li>• Implemente retry com backoff exponencial</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              ❌ "Falha ao processar download"
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              <strong>Causa:</strong> Erro ao baixar ou processar o conteúdo.
            </p>
            <p className="text-green-400 text-sm font-semibold">Solução:</p>
            <ul className="text-gray-400 text-sm space-y-1 ml-4">
              <li>• Verifique se o conteúdo está disponível</li>
              <li>• Tente novamente após alguns segundos</li>
              <li>• Verifique se não é conteúdo privado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Boas Práticas de Tratamento de Erros</h2>
        
        <CodeBlock
          language="javascript"
          title="Exemplo de tratamento robusto"
          code={`async function downloadVideo(url) {
  try {
    const response = await fetch('https://api.alauda.mz/api/youtube/download', {
      method: 'POST',
      headers: {
        'X-API-Key': process.env.API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    });

    const data = await response.json();

    if (!response.ok) {
      // Trata erros específicos
      switch (response.status) {
        case 401:
          throw new Error('API Key inválida ou não fornecida');
        case 402:
          throw new Error('Créditos insuficientes');
        case 429:
          throw new Error('Rate limit atingido. Aguarde e tente novamente');
        default:
          throw new Error(data.error || 'Erro desconhecido');
      }
    }

    return data.data;
  } catch (error) {
    console.error('Erro ao baixar vídeo:', error.message);
    throw error;
  }
}`}
        />
      </section>

      {/* Alertas */}
      <div className="space-y-4">
        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-blue-400 text-xl">💡</div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Dica</h3>
              <p className="text-gray-300 text-sm">
                Sempre implemente tratamento de erros adequado em suas aplicações. 
                Nunca assuma que uma requisição será bem-sucedida.
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
                Se você encontrar erros 5xx repetidamente, entre em contato com o suporte. 
                Estes erros geralmente indicam problemas no servidor que precisam ser investigados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
