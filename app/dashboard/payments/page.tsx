'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { paymentApi } from '@/lib/api';
import ProtectedRoute from '@/components/ProtectedRoute';
import Header from '@/components/Header';

interface PaymentRecord {
  _id: string;
  provider: string;
  amount: number;
  currency: string;
  status: string;
  credits_to_add: number;
  createdAt: string;
}

const creditPackages = [
  { credits: 500, price: 50, currency: 'MZN', popular: false },
  { credits: 2000, price: 150, currency: 'MZN', popular: false },
  { credits: 5000, price: 300, currency: 'MZN', popular: true },
  { credits: 15000, price: 750, currency: 'MZN', popular: false },
  { credits: 50000, price: 2000, currency: 'MZN', popular: false },
];

export default function PaymentsPage() {
  const { user, token } = useAuth();
  const [activeTab, setActiveTab] = useState<'recharge' | 'history'>('recharge');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'emola' | 'mercadopago'>('mpesa');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    if (token && activeTab === 'history') {
      loadPayments();
    }
  }, [token, activeTab]);

  const loadPayments = async () => {
    try {
      setLoadingHistory(true);
      const res = await paymentApi.myPayments(token!);
      setPayments(res.payments || []);
    } catch (err) {
      console.error('Erro ao carregar pagamentos:', err);
    } finally {
      setLoadingHistory(false);
    }
  };

  const handlePayment = async () => {
    if (selectedPackage === null) return;

    const pkg = creditPackages[selectedPackage];
    setLoading(true);
    setResult(null);

    try {
      if (paymentMethod === 'mpesa') {
        if (!phone) throw new Error('Número de celular obrigatório');
        await paymentApi.mpesa(token!, {
          valor: String(pkg.price),
          numero_celular: phone,
          usuario_id: user?.email || '',
        });
        setResult({ success: true, message: `Pagamento M-Pesa de ${pkg.price} MZN enviado! Verifique seu celular para confirmar.` });
      } else if (paymentMethod === 'emola') {
        if (!phone) throw new Error('Número de celular obrigatório');
        await paymentApi.emola(token!, {
          valor: String(pkg.price),
          numero_celular: phone,
          usuario_id: user?.email || '',
        });
        setResult({ success: true, message: `Pagamento E-Mola de ${pkg.price} MZN enviado! Verifique seu celular para confirmar.` });
      } else {
        if (!email) throw new Error('Email obrigatório');
        await paymentApi.mercadopago(token!, {
          email: email,
          amount: pkg.price,
          description: `${pkg.credits} créditos Alauda API`,
          usuario_id: user?.email || '',
        });
        setResult({ success: true, message: `Link de pagamento MercadoPago criado! Redirecionando...` });
      }
    } catch (err: any) {
      setResult({ success: false, message: err.message || 'Erro ao processar pagamento' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-950">
        <Header />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Pagamentos & Recarga 💳</h1>
            <p className="text-gray-400">Recarregue créditos ou veja seu histórico de pagamentos</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('recharge')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === 'recharge'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              💰 Recarregar
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === 'history'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              📋 Histórico
            </button>
          </div>

          {activeTab === 'recharge' ? (
            <div className="space-y-8">
              {/* Credit Packages */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Escolha um pacote</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {creditPackages.map((pkg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPackage(idx)}
                      className={`relative p-6 rounded-xl border-2 transition text-left ${
                        selectedPackage === idx
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-800 bg-gray-900 hover:border-gray-600'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                          POPULAR
                        </span>
                      )}
                      <p className="text-2xl font-bold text-white">{pkg.credits.toLocaleString()}</p>
                      <p className="text-gray-400 text-sm">créditos</p>
                      <p className="text-purple-400 font-bold mt-2">{pkg.price} {pkg.currency}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              {selectedPackage !== null && (
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Método de pagamento</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <button
                      onClick={() => setPaymentMethod('mpesa')}
                      className={`p-4 rounded-xl border-2 transition ${
                        paymentMethod === 'mpesa' ? 'border-purple-500 bg-purple-500/10' : 'border-gray-800 bg-gray-900 hover:border-gray-600'
                      }`}
                    >
                      <p className="text-white font-semibold">📱 M-Pesa</p>
                      <p className="text-gray-400 text-sm">Vodacom (84x)</p>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('emola')}
                      className={`p-4 rounded-xl border-2 transition ${
                        paymentMethod === 'emola' ? 'border-purple-500 bg-purple-500/10' : 'border-gray-800 bg-gray-900 hover:border-gray-600'
                      }`}
                    >
                      <p className="text-white font-semibold">📱 E-Mola</p>
                      <p className="text-gray-400 text-sm">Movitel (86x/87x)</p>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('mercadopago')}
                      className={`p-4 rounded-xl border-2 transition ${
                        paymentMethod === 'mercadopago' ? 'border-purple-500 bg-purple-500/10' : 'border-gray-800 bg-gray-900 hover:border-gray-600'
                      }`}
                    >
                      <p className="text-white font-semibold">💳 MercadoPago</p>
                      <p className="text-gray-400 text-sm">PIX, Cartão, Boleto</p>
                    </button>
                  </div>

                  {/* Payment Form */}
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    {(paymentMethod === 'mpesa' || paymentMethod === 'emola') ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Número de celular</label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder={paymentMethod === 'mpesa' ? '84xxxxxxx' : '86xxxxxxx'}
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="seu@email.com"
                        />
                      </div>
                    )}

                    <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Pacote</span>
                        <span className="text-white">{creditPackages[selectedPackage].credits.toLocaleString()} créditos</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-400">Método</span>
                        <span className="text-white">{paymentMethod === 'mpesa' ? 'M-Pesa' : paymentMethod === 'emola' ? 'E-Mola' : 'MercadoPago'}</span>
                      </div>
                      <div className="flex justify-between mt-3 pt-3 border-t border-gray-700">
                        <span className="text-white font-semibold">Total</span>
                        <span className="text-purple-400 font-bold text-lg">{creditPackages[selectedPackage].price} {creditPackages[selectedPackage].currency}</span>
                      </div>
                    </div>

                    <button
                      onClick={handlePayment}
                      disabled={loading}
                      className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 text-lg"
                    >
                      {loading ? '⏳ Processando...' : `Pagar ${creditPackages[selectedPackage].price} ${creditPackages[selectedPackage].currency}`}
                    </button>

                    {result && (
                      <div className={`mt-4 p-4 rounded-lg ${
                        result.success ? 'bg-green-500/10 border border-green-500/50 text-green-400' : 'bg-red-500/10 border border-red-500/50 text-red-400'
                      }`}>
                        {result.message}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Payment History */
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Histórico de Pagamentos</h2>
              {loadingHistory ? (
                <p className="text-gray-400">Carregando...</p>
              ) : payments.length === 0 ? (
                <p className="text-gray-400">Nenhum pagamento encontrado.</p>
              ) : (
                <div className="space-y-3">
                  {payments.map((payment) => (
                    <div key={payment._id} className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">
                          {payment.provider === 'mpesa' ? '📱' : payment.provider === 'emola' ? '📱' : '💳'}
                        </span>
                        <div>
                          <p className="text-white font-medium">{payment.provider.toUpperCase()}</p>
                          <p className="text-gray-500 text-sm">{new Date(payment.createdAt).toLocaleDateString('pt-BR')}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">{payment.amount} {payment.currency}</p>
                        <p className="text-purple-400 text-sm">+{payment.credits_to_add} créditos</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        payment.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        payment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {payment.status === 'completed' ? 'Aprovado' : payment.status === 'pending' ? 'Pendente' : 'Falhou'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
