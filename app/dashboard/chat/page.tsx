'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { tinaApi } from '@/lib/api';
import ProtectedRoute from '@/components/ProtectedRoute';
import Header from '@/components/Header';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  created_at?: string;
}

interface Session {
  session_id: string;
  session_name: string;
  message_count: number;
  last_access: string;
}

export default function TinaChatPage() {
  const { token } = useAuth();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingSessions, setLoadingSessions] = useState(true);
  const [creatingSession, setCreatingSession] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (token) loadSessions();
  }, [token]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadSessions = async () => {
    try {
      setLoadingSessions(true);
      const res = await tinaApi.listSessions(token!, 20);
      setSessions(res.sessions || []);
    } catch (err) {
      console.error('Erro ao carregar sessões:', err);
    } finally {
      setLoadingSessions(false);
    }
  };

  const createSession = async () => {
    try {
      setCreatingSession(true);
      const res = await tinaApi.newSession(token!, 'Nova Conversa');
      const newSessionId = res.session_id;
      await loadSessions();
      selectSession(newSessionId);
    } catch (err) {
      console.error('Erro ao criar sessão:', err);
    } finally {
      setCreatingSession(false);
    }
  };

  const selectSession = async (sessionId: string) => {
    setActiveSession(sessionId);
    try {
      const res = await tinaApi.getHistory(token!, sessionId);
      setMessages(res.messages || []);
    } catch (err) {
      console.error('Erro ao carregar histórico:', err);
      setMessages([]);
    }
  };

  const deleteSession = async (sessionId: string) => {
    try {
      await tinaApi.deleteSession(token!, sessionId);
      if (activeSession === sessionId) {
        setActiveSession(null);
        setMessages([]);
      }
      await loadSessions();
    } catch (err) {
      console.error('Erro ao deletar sessão:', err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeSession || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await tinaApi.chat(token!, activeSession, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: res.message }]);
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: `❌ Erro: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - Sessions */}
          <div className="w-72 bg-gray-900 border-r border-gray-800 flex flex-col">
            <div className="p-4 border-b border-gray-800">
              <button
                onClick={createSession}
                disabled={creatingSession}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 text-sm"
              >
                {creatingSession ? 'Criando...' : '+ Nova Conversa'}
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
              {loadingSessions ? (
                <p className="text-gray-500 text-sm text-center p-4">Carregando...</p>
              ) : sessions.length === 0 ? (
                <p className="text-gray-500 text-sm text-center p-4">Nenhuma conversa ainda</p>
              ) : (
                sessions.map(session => (
                  <div
                    key={session.session_id}
                    className={`flex items-center justify-between p-3 rounded-lg mb-1 cursor-pointer transition ${
                      activeSession === session.session_id
                        ? 'bg-purple-600/20 border border-purple-500/50'
                        : 'hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex-1 min-w-0" onClick={() => selectSession(session.session_id)}>
                      <p className="text-white text-sm font-medium truncate">{session.session_name}</p>
                      <p className="text-gray-500 text-xs">{session.message_count} msgs</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteSession(session.session_id); }}
                      className="text-gray-600 hover:text-red-400 transition text-sm ml-2"
                      title="Deletar"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {activeSession ? (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.length === 0 && (
                    <div className="flex items-center justify-center h-full text-gray-600">
                      <div className="text-center">
                        <p className="text-6xl mb-4">🤖</p>
                        <p className="text-xl font-semibold text-gray-400">Olá! Eu sou a Tina</p>
                        <p className="text-gray-500 mt-2">Como posso te ajudar hoje?</p>
                      </div>
                    </div>
                  )}
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] rounded-2xl px-5 py-3 ${
                        msg.role === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-200 border border-gray-700'
                      }`}>
                        {msg.role === 'assistant' && <p className="text-xs text-purple-400 font-semibold mb-1">🤖 Tina</p>}
                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 border border-gray-700 rounded-2xl px-5 py-3">
                        <p className="text-xs text-purple-400 font-semibold mb-1">🤖 Tina</p>
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t border-gray-800 p-4">
                  <div className="flex gap-3 max-w-4xl mx-auto">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Digite sua mensagem..."
                      className="flex-1 px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      disabled={loading}
                    />
                    <button
                      onClick={sendMessage}
                      disabled={loading || !input.trim()}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50"
                    >
                      Enviar
                    </button>
                  </div>
                  <p className="text-center text-gray-600 text-xs mt-2">5 créditos por mensagem • Powered by Gemini 2.5 Flash</p>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-4">🤖</p>
                  <h2 className="text-2xl font-bold text-white mb-2">Tina AI</h2>
                  <p className="text-gray-400 mb-6">Selecione ou crie uma conversa para começar</p>
                  <button
                    onClick={createSession}
                    disabled={creatingSession}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50"
                  >
                    {creatingSession ? 'Criando...' : '+ Nova Conversa'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
