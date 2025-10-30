// app/docs/limits/page.tsx
// Documentação de rate limits

import CodeBlock from '@/components/CodeBlock';

export default function DocsLimitsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Rate Limits ⏱️</h1>
        <p className="text-xl text-gray-400">
          Limites de requisições por plano
        </p>
      </div>

      {/* Visão Geral */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Visão Geral</h2>
        <p className="text-gray-400 mb-4">
          A Alauda API implementa rate limits para garantir uso justo e estabilidade do serviço. 
          Os limites variam de acordo com seu plano de assinatura.
        </p>
      </section>

      {/* Limites por Plano */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Limites por Plano</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">
                  Plano
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">
                  Requests / 15min
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">
                  Requests / Dia
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">
                  Requests / Mês
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-6 py-4">
                  <span className="text-white font-semibold">Free</span>
                </td>
                <td className="px-6 py-4 text-gray-400">10</td>
                <td className="px-6 py-4 text-gray-400">10</td>
                <td className="px-6 py-4 text-gray-400">100</td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <span className="text-white font-semibold">Basic</span>
                </td>
                <td className="px-6 py-4 text-blue-400">100</td>
                <td className="px-6 py-4 text-blue-400">200</td>
                <td className="px-6 py-4 text-blue-400">5.000</td>
              </tr>
              <tr className="bg-purple-500/5">
                <td className="px-6 py-4">
                  <span className="text-white font-semibold">Pro</span>
                  <span className="ml-2 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">POPULAR</span>
                </td>
                <td className="px-6 py-4 text-purple-400 font-semibold">500</td>
                <td className="px-6 py-4 text-purple-400 font-semibold">1.000</td>
                <td className="px-6 py-4 text-purple-400 font-semibold">20.000</td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <span className="text-white font-semibold">Premium</span>
                </td>
                <td className="px-6 py-4 text-green-400 font-semibold">10.000</td>
                <td className="px-6 py-4 text-green-400 font-semibold">Ilimitado</td>
                <td className="px-6 py-4 text-green-400 font-semibold">Ilimitado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Headers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Headers de Rate Limit</h2>
        <p className="text-gray-400 mb-4">
          Cada resposta da API inclui headers informativos sobre seu uso atual:
        </p>
        
        <CodeBlock
          language="http"
          code={`HTTP/1.1 200 OK
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1635789600`}
        />

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-4">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <code className="text-purple-400 font-mono text-sm">X-RateLimit-Limit</code>
              <span className="text-gray-400 text-sm">Número máximo de requisições permitidas no período atual</span>
            </li>
            <li className="flex gap-3">
              <code className="text-purple-400 font-mono text-sm">X-RateLimit-Remaining</code>
              <span className="text-gray-400 text-sm">Requisições restantes no período atual</span>
            </li>
            <li className="flex gap-3">
              <code className="text-purple-400 font-mono text-sm">X-RateLimit-Reset</code>
              <span className="text-gray-400 text-sm">Timestamp Unix de quando o limite será resetado</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Quando Atingido */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Quando o Limite é Atingido</h2>
        <p className="text-gray-400 mb-4">
          Ao atingir o rate limit, você receberá uma resposta com status <code>429 Too Many Requests</code>:
        </p>
        
        <CodeBlock
          language="json"
          code={`{
  "success": false,
  "error": "Limite de requisições atingido. Tente novamente mais tarde.",
  "retry_after": 900
}`}
        />

        <p className="text-gray-400 mt-4 text-sm">
          O campo <code>retry_after</code> indica quantos segundos você deve aguardar antes de tentar novamente.
        </p>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Boas Práticas</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              1. Monitore os Headers
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Sempre verifique os headers de rate limit nas respostas para saber quantas requisições você tem disponíveis.
            </p>
            <CodeBlock
              language="javascript"
              code={`const response = await fetch('https://api.alauda.mz/api/...');
const remaining = response.headers.get('X-RateLimit-Remaining');
const reset = response.headers.get('X-RateLimit-Reset');

console.log(\`Requisições restantes: \${remaining}\`);
console.log(\`Reset em: \${new Date(reset * 1000)}\`);`}
            />
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              2. Implemente Retry com Backoff
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Se você receber um erro 429, aguarde antes de tentar novamente:
            </p>
            <CodeBlock
              language="javascript"
              code={`async function requestWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, options);
    
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After') || 60;
      console.log(\`Rate limited. Aguardando \${retryAfter}s...\`);
      await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
      continue;
    }
    
    return response;
  }
  
  throw new Error('Max retries atingido');
}`}
            />
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              3. Use Cache
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Armazene em cache respostas que não mudam frequentemente:
            </p>
            <CodeBlock
              language="javascript"
              code={`const cache = new Map();

async function getCachedData(url) {
  if (cache.has(url)) {
    const { data, timestamp } = cache.get(url);
    
    // Cache válido por 1 hora
    if (Date.now() - timestamp < 3600000) {
      return data;
    }
  }
  
  const response = await fetch(url);
  const data = await response.json();
  
  cache.set(url, {
    data,
    timestamp: Date.now()
  });
  
  return data;
}`}
            />
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              4. Implemente Queue
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Para aplicações com alto volume, use uma fila para controlar requisições:
            </p>
            <CodeBlock
              language="javascript"
              code={`class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.queue = [];
    this.requests = [];
  }

  async throttle(fn) {
    // Remove requisições antigas
    const now = Date.now();
    this.requests = this.requests.filter(
      time => now - time < this.windowMs
    );

    // Se atingiu o limite, aguarda
    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0];
      const waitTime = this.windowMs - (now - oldestRequest);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    this.requests.push(Date.now());
    return fn();
  }
}

// Uso
const limiter = new RateLimiter(10, 15 * 60 * 1000); // 10 req/15min

await limiter.throttle(() => fetch('https://api.alauda.mz/api/...'));`}
            />
          </div>
        </div>
      </section>

      {/* Dicas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Dicas para Otimização</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="text-lg font-semibold text-white mb-2">Batch Requests</h3>
            <p className="text-sm text-gray-400">
              Agrupe múltiplas operações em uma única requisição quando possível
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🕐</div>
            <h3 className="text-lg font-semibold text-white mb-2">Off-Peak Hours</h3>
            <p className="text-sm text-gray-400">
              Se possível, execute operações pesadas fora dos horários de pico
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">💾</div>
            <h3 className="text-lg font-semibold text-white mb-2">Cache Agressivo</h3>
            <p className="text-sm text-gray-400">
              Armazene resultados que não mudam frequentemente (como info de vídeos)
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">Upgrade de Plano</h3>
            <p className="text-sm text-gray-400">
              Se você atinge limites constantemente, considere fazer upgrade
            </p>
          </div>
        </div>
      </section>

      {/* Monitoramento */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Monitoramento de Uso</h2>
        <p className="text-gray-400 mb-4">
          Você pode monitorar seu uso atual através do dashboard ou da API:
        </p>
        
        <CodeBlock
          language="bash"
          code={`curl -X GET https://api.alauda.mz/api/keys/stats/summary \\
  -H "Authorization: Bearer seu_token_jwt"`}
        />

        <CodeBlock
          language="json"
          title="Resposta"
          code={`{
  "success": true,
  "stats": {
    "totalKeys": 1,
    "activeKeys": 1,
    "totalCredits": 19850,
    "totalRequests": 150,
    "successfulRequests": 145,
    "failedRequests": 5
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
              <h3 className="text-blue-400 font-semibold mb-1">Dica Pro</h3>
              <p className="text-gray-300 text-sm">
                Configure alertas em sua aplicação quando você atingir 80% do seu rate limit. 
                Isso te dá tempo para implementar estratégias de mitigação antes de atingir o limite.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/50 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-purple-400 text-xl">⭐</div>
            <div>
              <h3 className="text-purple-400 font-semibold mb-1">Plano Pro Recomendado</h3>
              <p className="text-gray-300 text-sm">
                Para a maioria dos bots WhatsApp, o plano Pro oferece rate limits generosos 
                (500 req/15min) que dificilmente serão atingidos em uso normal.
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
                Burlar ou tentar contornar os rate limits (usando múltiplas keys, etc) pode 
                resultar em suspensão permanente da sua conta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
