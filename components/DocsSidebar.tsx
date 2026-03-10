// components/DocsSidebar.tsx
// Sidebar de navegação da documentação

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
  icon: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Começar',
    items: [
      { title: 'Introdução', href: '/docs', icon: '🚀' },
      { title: 'Autenticação', href: '/docs/auth', icon: '🔐' },
      { title: 'Planos & Preços', href: '/docs/plans', icon: '💎' },
    ],
  },
  {
    title: 'Downloads',
    items: [
      { title: 'YouTube', href: '/docs/youtube', icon: '📺' },
      { title: 'Spotify', href: '/docs/spotify', icon: '🎵' },
      { title: 'Instagram', href: '/docs/instagram', icon: '📸' },
      { title: 'TikTok', href: '/docs/tiktok', icon: '🎬' },
      { title: 'Facebook', href: '/docs/facebook', icon: '📘' },
      { title: 'XVideos', href: '/docs/xvideos', icon: '🔞' },
    ],
  },
  {
    title: 'Serviços',
    items: [
      { title: 'Shazam', href: '/docs/shazam', icon: '🎼' },
      { title: 'Remove BG', href: '/docs/removebg', icon: '🖼️' },
      { title: 'Lyrics', href: '/docs/lyrics', icon: '🎤' },
      { title: 'Vocal Remover', href: '/docs/vocalremover', icon: '🎵' },
      { title: 'CPF', href: '/docs/cpf', icon: '🇧🇷' },
      { title: 'Tina AI', href: '/docs/tina', icon: '🤖' },
    ],
  },
  {
    title: 'Integrações',
    items: [
      { title: 'WhatsApp', href: '/docs/whatsapp', icon: '💬' },
      { title: 'Pagamentos', href: '/docs/payment', icon: '💳' },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { title: 'Códigos de Erro', href: '/docs/errors', icon: '⚠️' },
      { title: 'Rate Limits', href: '/docs/limits', icon: '⏱️' },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="block mb-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Alauda API
          </div>
          <p className="text-xs text-gray-500 mt-1">Documentação v1.0</p>
        </Link>

        <nav className="space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                          isActive
                            ? 'bg-purple-600 text-white font-medium'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        }`}
                      >
                        <span className="text-base">{item.icon}</span>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
