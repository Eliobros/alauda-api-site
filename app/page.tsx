// app/page.tsx
// Landing page

import Link from 'next/link';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alauda API
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            API de downloads e serviços para bots WhatsApp
          </p>
          <p className="text-lg text-gray-400 mb-8">
            🇲🇿 Desenvolvido em Moçambique por Zëüs Lykraios 💎
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition shadow-lg shadow-purple-500/50"
            >
              Começar Agora →
            </Link>
            <Link
              href="/docs"
              className="px-8 py-4 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition border border-gray-700"
            >
              Ver Documentação
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          O que oferecemos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-4xl mb-4">📥</div>
            <h3 className="text-xl font-semibold text-white mb-3">Downloads</h3>
            <p className="text-gray-400">
              YouTube, TikTok, Instagram e Spotify. Baixe vídeos e músicas de forma simples e rápida.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-4xl mb-4">🎼</div>
            <h3 className="text-xl font-semibold text-white mb-3">Reconhecimento</h3>
            <p className="text-gray-400">
              Identifique músicas instantaneamente com integração Shazam. Descubra o nome daquela música!
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-4xl mb-4">🖼️</div>
            <h3 className="text-xl font-semibold text-white mb-3">Processamento</h3>
            <p className="text-gray-400">
              Remova fundos de imagens usando IA. Qualidade profissional em segundos.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-white mb-3">IA Conversacional</h3>
            <p className="text-gray-400">
              Converse com a Tina, nossa assistente de IA powered by Gemini. Conversas contextualizadas e inteligentes.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold text-white mb-3">Separação de Áudio</h3>
            <p className="text-gray-400">
              Separe vocais e instrumentais de qualquer música usando IA. Até 5 stems diferentes.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-semibold text-white mb-3">Pagamentos</h3>
            <p className="text-gray-400">
              Sistema integrado com M-Pesa, E-Mola e MercadoPago. Recarregue créditos facilmente.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Serviços Disponíveis
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: 'YouTube', icon: '📺' },
            { name: 'Spotify', icon: '🎵' },
            { name: 'Instagram', icon: '📸' },
            { name: 'TikTok', icon: '🎬' },
            { name: 'Shazam', icon: '🎼' },
            { name: 'RemoveBG', icon: '🖼️' },
            { name: 'Facebook', icon: '📘' },
            { name: 'Lyrics', icon: '🎤' },
            { name: 'CPF', icon: '🇧🇷' },
            { name: 'Vocal Remover', icon: '🎵' },
            { name: 'WhatsApp', icon: '💬' },
            { name: 'Tina AI', icon: '🤖' },
            { name: 'XVideos', icon: '🔞' },
            { name: 'Payments', icon: '💳' },
          ].map((service) => (
            <div
              key={service.name}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-purple-500 transition"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <p className="text-white font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Planos & Preços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Free */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Free</h3>
            <p className="text-3xl font-bold text-gray-400 mb-4">0 MT<span className="text-base">/mês</span></p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>✓ 100 créditos/mês</li>
              <li>✓ 10 requests/dia</li>
              <li>✓ Acesso básico</li>
            </ul>
          </div>

          {/* Basic */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
            <p className="text-3xl font-bold text-blue-400 mb-4">200 MT<span className="text-base">/mês</span></p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>✓ 5.000 créditos/mês</li>
              <li>✓ 200 requests/dia</li>
              <li>✓ Suporte prioritário</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 border-2 border-purple-500 rounded-xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
              POPULAR
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <p className="text-3xl font-bold text-purple-300 mb-4">500 MT<span className="text-base">/mês</span></p>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>✓ 20.000 créditos/mês</li>
              <li>✓ 1.000 requests/dia</li>
              <li>✓ Sem rate limit diário</li>
              <li>✓ Webhooks</li>
            </ul>
          </div>

          {/* Premium */}
          <div className="bg-gray-900 border border-yellow-600 rounded-xl p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Premium</h3>
            <p className="text-3xl font-bold text-yellow-400 mb-4">1.000 MT<span className="text-base">/mês</span></p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>✓ Créditos ilimitados</li>
              <li>✓ Requests ilimitados</li>
              <li>✓ API dedicada</li>
              <li>✓ SLA garantido</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Status da API */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/50 rounded-full">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 font-medium">API Online</span>
          </div>
          <p className="text-gray-400 mt-2 text-sm">Todos os serviços operacionais</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 border border-purple-500">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Crie sua conta gratuitamente e comece a usar a Alauda API hoje mesmo!
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-white text-purple-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Criar Conta Grátis →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              <span className="font-semibold text-white">Alauda API</span> - Desenvolvido com 💜 em Moçambique
            </p>
            <p className="text-sm">
              by Zëüs Lykraios 💎 | © 2025 Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
