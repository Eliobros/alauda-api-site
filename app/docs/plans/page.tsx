// app/docs/plans/page.tsx
// Documentação de planos e preços

export default function DocsPlansPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Planos & Preços 💎</h1>
        <p className="text-xl text-gray-400">
          Escolha o plano ideal para suas necessidades
        </p>
      </div>

      {/* Comparação de Planos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Comparação de Planos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free */}
          <div className="bg-gray-900 border-2 border-gray-800 rounded-xl p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-400 mb-1">
                0 MT
              </div>
              <p className="text-sm text-gray-500">/mês</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-400">Para testes e projetos pequenos</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">100 créditos/mês</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">10 requests/dia</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Acesso básico</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Suporte por email</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">Ideal para: Testes e desenvolvimento</p>
            </div>
          </div>

          {/* Basic */}
          <div className="bg-gray-900 border-2 border-blue-500/50 rounded-xl p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <div className="text-4xl font-bold text-blue-400 mb-1">
                200 MT
              </div>
              <p className="text-sm text-gray-500">/mês</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-400">Para bots em crescimento</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">5.000 créditos/mês</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">200 requests/dia</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Todas as funcionalidades</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Suporte prioritário</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Rate limit aumentado</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">Ideal para: Pequenos bots</p>
            </div>
          </div>

          {/* Pro */}
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 border-2 border-purple-500 rounded-xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
              POPULAR
            </div>
            
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-purple-300 mb-1">
                500 MT
              </div>
              <p className="text-sm text-purple-200">/mês</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-purple-200">Para bots profissionais</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-purple-100">20.000 créditos/mês</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-purple-100">1.000 requests/dia</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-purple-100">Sem rate limit diário</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-purple-100">Webhooks inclusos</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-purple-100">Suporte prioritário 24/7</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-purple-700">
              <p className="text-xs text-purple-200">Ideal para: Bots com alto tráfego</p>
            </div>
          </div>

          {/* Premium */}
          <div className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-1">
                1.000 MT
              </div>
              <p className="text-sm text-gray-500">/mês</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-400">Para empresas e alta demanda</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Créditos ilimitados ∞</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Requests ilimitados</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">API dedicada</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">SLA garantido</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Custom cases</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Suporte 24/7</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">Ideal para: Empresas e grande escala</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Rate Limits por Plano</h2>
        
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
                <td className="px-6 py-4 text-white font-semibold">Free</td>
                <td className="px-6 py-4 text-gray-400">10</td>
                <td className="px-6 py-4 text-gray-400">10</td>
                <td className="px-6 py-4 text-gray-400">100</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white font-semibold">Basic</td>
                <td className="px-6 py-4 text-gray-400">100</td>
                <td className="px-6 py-4 text-gray-400">200</td>
                <td className="px-6 py-4 text-gray-400">5.000</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white font-semibold">Pro</td>
                <td className="px-6 py-4 text-gray-400">500</td>
                <td className="px-6 py-4 text-gray-400">1.000</td>
                <td className="px-6 py-4 text-gray-400">20.000</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white font-semibold">Premium</td>
                <td className="px-6 py-4 text-green-400">10.000</td>
                <td className="px-6 py-4 text-green-400">Ilimitado</td>
                <td className="px-6 py-4 text-green-400">Ilimitado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Como funcionam os créditos?
            </h3>
            <p className="text-gray-400 text-sm">
              Cada operação na API consome uma quantidade específica de créditos. Por exemplo, 
              baixar um vídeo do YouTube consome 50 créditos, enquanto obter informações consome apenas 10.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Posso mudar de plano?
            </h3>
            <p className="text-gray-400 text-sm">
              Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
              As mudanças entram em vigor imediatamente.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              O que acontece se eu exceder meu limite?
            </h3>
            <p className="text-gray-400 text-sm">
              Quando seus créditos acabarem, você receberá erros 402 (Payment Required). 
              Você pode fazer upgrade do plano ou esperar a renovação mensal.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Os créditos não utilizados são acumulados?
            </h3>
            <p className="text-gray-400 text-sm">
              Não, os créditos são resetados no início de cada mês. Use-os antes que expirem!
            </p>
          </div>
        </div>
      </section>

      {/* Alert */}
      <div className="bg-purple-500/10 border border-purple-500/50 rounded-lg p-4">
        <div className="flex gap-3">
          <div className="text-purple-400 text-xl">💎</div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-1">Plano Pro Recomendado</h3>
            <p className="text-gray-300 text-sm">
              Para a maioria dos bots WhatsApp, recomendamos o plano Pro que oferece o melhor 
              custo-benefício com 20.000 créditos mensais e sem rate limit diário.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
