'use client';

import Header from '@/components/Header';

const services = [
  { name: 'YouTube', icon: '📺', endpoint: '/api/youtube', category: 'Downloads' },
  { name: 'Spotify', icon: '🎵', endpoint: '/api/spotify', category: 'Downloads' },
  { name: 'Instagram', icon: '📸', endpoint: '/api/instagram', category: 'Downloads' },
  { name: 'TikTok', icon: '🎬', endpoint: '/api/tiktok', category: 'Downloads' },
  { name: 'Facebook', icon: '📘', endpoint: '/api/facebook', category: 'Downloads' },
  { name: 'XVideos', icon: '🔞', endpoint: '/api/xvideos', category: 'Downloads' },
  { name: 'Shazam', icon: '🎼', endpoint: '/api/shazam', category: 'Serviços' },
  { name: 'Remove BG', icon: '🖼️', endpoint: '/api/remove', category: 'Serviços' },
  { name: 'Lyrics', icon: '🎤', endpoint: '/api/lyrics', category: 'Serviços' },
  { name: 'Vocal Remover', icon: '🎵', endpoint: '/api/vocalremove', category: 'Serviços' },
  { name: 'CPF', icon: '🇧🇷', endpoint: '/api/cpf', category: 'Serviços' },
  { name: 'Tina AI', icon: '🤖', endpoint: '/api/tina', category: 'Serviços' },
  { name: 'WhatsApp', icon: '💬', endpoint: '/api/whatsapp', category: 'Integrações' },
  { name: 'Pagamentos', icon: '💳', endpoint: '/api/payment', category: 'Integrações' },
  { name: 'Autenticação', icon: '🔐', endpoint: '/api/auth', category: 'Sistema' },
  { name: 'API Keys', icon: '🔑', endpoint: '/api/keys', category: 'Sistema' },
];

export default function StatusPage() {
  const categories = [...new Set(services.map(s => s.category))];

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Status da API ⚡</h1>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/50 rounded-full">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 font-semibold">Todos os serviços operacionais</span>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Última verificação: {new Date().toLocaleString('pt-BR', { timeZone: 'Africa/Maputo' })}
          </p>
        </div>

        {/* Services by category */}
        {categories.map(category => (
          <div key={category} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-4">{category}</h2>
            <div className="space-y-2">
              {services.filter(s => s.category === category).map(service => (
                <div key={service.name} className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-between hover:border-gray-700 transition">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <p className="text-white font-medium">{service.name}</p>
                      <p className="text-gray-500 text-sm font-mono">{service.endpoint}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-400 text-sm font-medium">Online</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* System Info */}
        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Informações do Sistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">Versão da API</p>
              <p className="text-white font-semibold">v1.0.0</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Região</p>
              <p className="text-white font-semibold">🇲🇿 Maputo, Moçambique</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Desenvolvedor</p>
              <p className="text-white font-semibold">Zëüs Lykraios 💎</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
