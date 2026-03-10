// app/dashboard/page.tsx
// Dashboard principal

'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { keysApi, ApiKey } from '@/lib/api';
import ProtectedRoute from '@/components/ProtectedRoute';
import Header from '@/components/Header';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, token } = useAuth();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'basic' | 'pro' | 'premium'>('free');
  const [newKey, setNewKey] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) {
      loadData();
    }
  }, [token]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [keysResponse, statsResponse] = await Promise.all([
        keysApi.list(token!),
        keysApi.stats(token!),
      ]);
      setKeys(keysResponse.keys);
      setStats(statsResponse.stats);
    } catch (err: any) {
      console.error('Erro ao carregar dados:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateKey = async () => {
    setError('');
    setGenerating(true);
    try {
      const response = await keysApi.generate(token!, selectedPlan);
      setNewKey(response.apiKey);
      await loadData(); // Recarrega dados
    } catch (err: any) {
      setError(err.message || 'Erro ao gerar API Key');
    } finally {
      setGenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para área de transferência!');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-950">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Bem-vindo, {user?.name}! 👋
            </h1>
            <p className="text-gray-400">Gerencie suas API Keys e monitore o uso</p>
          </div>

          {/* Stats Cards */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-1">Total de Keys</p>
                <p className="text-3xl font-bold text-white">{stats.totalKeys}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-1">Keys Ativas</p>
                <p className="text-3xl font-bold text-green-400">{stats.activeKeys}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-1">Total Créditos</p>
                <p className="text-3xl font-bold text-purple-400">{stats.totalCredits.toLocaleString()}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-1">Total Requests</p>
                <p className="text-3xl font-bold text-blue-400">{stats.totalRequests.toLocaleString()}</p>
              </div>
            </div>
          )}

          {/* Generate New Key */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Gerar Nova API Key</h2>
            
            {keys.length === 0 ? (
              <div>
                <p className="text-gray-400 mb-4">
                  Você ainda não tem nenhuma API Key. Gere uma agora para começar a usar a Alauda API!
                </p>
                
                <div className="flex items-center gap-4">
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value as any)}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="free">Free - 100 créditos</option>
                    <option value="basic">Basic - 5.000 créditos</option>
                    <option value="pro">Pro - 20.000 créditos</option>
                    <option value="premium">Premium - Ilimitado</option>
                  </select>
                  
                  <button
                    onClick={handleGenerateKey}
                    disabled={generating}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {generating ? 'Gerando...' : 'Gerar API Key'}
                  </button>
                </div>

                {error && (
                  <div className="mt-4 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-blue-500/10 border border-blue-500/50 text-blue-400 px-4 py-3 rounded-lg">
                Você já possui uma API Key ativa. Revogue-a antes de criar uma nova.
              </div>
            )}

            {/* Show new key if generated */}
            {newKey && (
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-semibold mb-2">✅ API Key gerada com sucesso!</p>
                <div className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg">
                  <code className="text-sm text-gray-300 flex-1 overflow-x-auto">{newKey}</code>
                  <button
                    onClick={() => copyToClipboard(newKey)}
                    className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition"
                  >
                    Copiar
                  </button>
                </div>
                <p className="text-yellow-400 text-sm mt-2">⚠️ Guarde esta key em local seguro! Ela não será mostrada novamente.</p>
              </div>
            )}
          </div>

          {/* Keys List */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Minhas API Keys</h2>
            
            {loading ? (
              <p className="text-gray-400">Carregando...</p>
            ) : keys.length === 0 ? (
              <p className="text-gray-400">Você ainda não tem API Keys.</p>
            ) : (
              <div className="space-y-4">
                {keys.map((key) => (
                  <div
                    key={key.id}
                    className="border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            key.plan === 'free' ? 'bg-gray-700 text-gray-300' :
                            key.plan === 'basic' ? 'bg-blue-500/20 text-blue-400' :
                            key.plan === 'pro' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {key.plan.toUpperCase()}
                          </span>
                          {key.active ? (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                              Ativa
                            </span>
                          ) : (
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold">
                              Inativa
                            </span>
                          )}
                        </div>
                        <code className="text-sm text-gray-400 font-mono">{key.key}</code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(key.fullKey)}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded hover:bg-gray-700 transition"
                      >
                        Copiar
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Créditos</p>
                        <p className="text-white font-semibold">{key.credits.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Requests</p>
                        <p className="text-white font-semibold">{key.totalRequests}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Taxa de Sucesso</p>
                        <p className="text-white font-semibold">{key.successRate}%</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Expira em</p>
                        <p className="text-white font-semibold">{key.daysUntilExpiration} dias</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link
              href="/docs"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
                📖 Documentação
              </h3>
              <p className="text-gray-400 text-sm">Veja como usar a API</p>
            </Link>
            
            <Link
              href="/dashboard/payments"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
                💳 Pagamentos
              </h3>
              <p className="text-gray-400 text-sm">Recarregue créditos</p>
            </Link>

            <Link
              href="/dashboard/chat"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
                🤖 Tina AI
              </h3>
              <p className="text-gray-400 text-sm">Converse com a IA</p>
            </Link>

            <Link
              href="/playground"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
                🧪 Playground
              </h3>
              <p className="text-gray-400 text-sm">Teste a API ao vivo</p>
            </Link>

            <Link
              href="/status"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
                ⚡ Status
              </h3>
              <p className="text-gray-400 text-sm">Status dos serviços</p>
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
