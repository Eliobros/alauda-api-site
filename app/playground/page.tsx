'use client';

import { useState } from 'react';
import Header from '@/components/Header';

const API_BASE_URL = 'https://alauda-api.topazioverse.com.br';

interface Endpoint {
  name: string;
  method: 'GET' | 'POST' | 'DELETE';
  path: string;
  category: string;
  fields: { name: string; type: string; required: boolean; placeholder: string }[];
}

const endpoints: Endpoint[] = [
  {
    name: 'YouTube - Download',
    method: 'POST',
    path: '/api/youtube/download',
    category: 'Downloads',
    fields: [
      { name: 'url', type: 'text', required: true, placeholder: 'https://youtube.com/watch?v=...' },
      { name: 'format', type: 'text', required: false, placeholder: 'mp4 ou mp3' },
      { name: 'quality', type: 'text', required: false, placeholder: '360p, 480p, 720p, 1080p' },
    ],
  },
  {
    name: 'Spotify - Search',
    method: 'GET',
    path: '/api/spotify/search',
    category: 'Downloads',
    fields: [
      { name: 'query', type: 'text', required: true, placeholder: 'Nome da música ou artista' },
    ],
  },
  {
    name: 'Spotify - Download',
    method: 'POST',
    path: '/api/spotify/download',
    category: 'Downloads',
    fields: [
      { name: 'url', type: 'text', required: true, placeholder: 'https://open.spotify.com/track/...' },
    ],
  },
  {
    name: 'Instagram - Download',
    method: 'POST',
    path: '/api/instagram/download',
    category: 'Downloads',
    fields: [
      { name: 'url', type: 'text', required: true, placeholder: 'https://instagram.com/p/...' },
    ],
  },
  {
    name: 'TikTok - Download',
    method: 'POST',
    path: '/api/tiktok/download',
    category: 'Downloads',
    fields: [
      { name: 'url', type: 'text', required: true, placeholder: 'https://tiktok.com/@user/video/...' },
    ],
  },
  {
    name: 'Facebook - Download',
    method: 'POST',
    path: '/api/facebook/download',
    category: 'Downloads',
    fields: [
      { name: 'url', type: 'text', required: true, placeholder: 'https://facebook.com/watch?v=...' },
    ],
  },
  {
    name: 'Shazam - Identify',
    method: 'POST',
    path: '/api/shazam/identify',
    category: 'Serviços',
    fields: [
      { name: 'url', type: 'text', required: true, placeholder: 'URL do áudio para identificar' },
    ],
  },
  {
    name: 'Lyrics - Search',
    method: 'POST',
    path: '/api/lyrics/search',
    category: 'Serviços',
    fields: [
      { name: 'artist', type: 'text', required: true, placeholder: 'Nome do artista' },
      { name: 'title', type: 'text', required: true, placeholder: 'Título da música' },
    ],
  },
  {
    name: 'CPF - Validar',
    method: 'POST',
    path: '/api/cpf/validar',
    category: 'Serviços',
    fields: [
      { name: 'cpf', type: 'text', required: true, placeholder: '123.456.789-10' },
    ],
  },
  {
    name: 'Tina AI - Chat',
    method: 'POST',
    path: '/api/tina/chat',
    category: 'Serviços',
    fields: [
      { name: 'session_id', type: 'text', required: true, placeholder: 'sess_...' },
      { name: 'message', type: 'text', required: true, placeholder: 'Sua mensagem para a Tina' },
    ],
  },
  {
    name: 'Tina AI - Nova Sessão',
    method: 'POST',
    path: '/api/tina/session/new',
    category: 'Serviços',
    fields: [
      { name: 'session_name', type: 'text', required: false, placeholder: 'Nome da sessão (opcional)' },
    ],
  },
];

export default function PlaygroundPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>(endpoints[0]);
  const [apiKey, setApiKey] = useState('');
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [downloadUrls, setDownloadUrls] = useState<{ video?: string; audio?: string; hd?: string; sd?: string } | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleEndpointChange = (index: number) => {
    setSelectedEndpoint(endpoints[index]);
    setFieldValues({});
    setResponse(null);
    setResponseTime(null);
    setResponseStatus(null);
    setDownloadUrls(null);
  };

  const handleFieldChange = (name: string, value: string) => {
    setFieldValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!apiKey) {
      setResponse(JSON.stringify({ error: 'API Key é obrigatória' }, null, 2));
      return;
    }

    setLoading(true);
    setResponse(null);
    const startTime = Date.now();

    try {
      const headers: Record<string, string> = {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      };

      let url = `${API_BASE_URL}${selectedEndpoint.path}`;
      const options: RequestInit = { method: selectedEndpoint.method, headers };

      if (selectedEndpoint.method === 'GET') {
        const params = new URLSearchParams();
        Object.entries(fieldValues).forEach(([key, value]) => {
          if (value) params.set(key, value);
        });
        const qs = params.toString();
        if (qs) url += `?${qs}`;
      } else if (selectedEndpoint.method === 'POST') {
        const body: Record<string, string> = {};
        Object.entries(fieldValues).forEach(([key, value]) => {
          if (value) body[key] = value;
        });
        options.body = JSON.stringify(body);
      }

      const res = await fetch(url, options);
      const data = await res.json();
      setResponseStatus(res.status);
      setResponse(JSON.stringify(data, null, 2));

      // Extract download URLs from response (checks data.data.* and data.*)
      const d = data?.data || data;
      const urls: { video?: string; audio?: string; hd?: string; sd?: string } = {};
      if (d?.download_url) urls.video = d.download_url;
      if (d?.download_url_hd) urls.hd = d.download_url_hd;
      if (d?.download_url_sd) urls.sd = d.download_url_sd;
      if (d?.audio_url) urls.audio = d.audio_url;
      if (Object.keys(urls).length > 0) setDownloadUrls(urls);
      else setDownloadUrls(null);
    } catch (err: any) {
      setResponse(JSON.stringify({ error: err.message || 'Erro na requisição' }, null, 2));
      setResponseStatus(0);
    } finally {
      setResponseTime(Date.now() - startTime);
      setLoading(false);
    }
  };

  const handleDownload = async (url: string, label: string) => {
    setDownloading(label);
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const filename = url.split('/').pop() || `download_${label}`;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    } catch {
      alert('Erro ao baixar o arquivo. Tente novamente.');
    } finally {
      setDownloading(null);
    }
  };

  const categories = [...new Set(endpoints.map(e => e.category))];

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">API Playground 🧪</h1>
          <p className="text-gray-400">Teste os endpoints da Alauda API diretamente no navegador</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Request Panel */}
          <div className="space-y-6">
            {/* API Key */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">🔑 API Key</label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm"
                placeholder="alauda_xxxxxxxxxxxxxxxxxx"
              />
            </div>

            {/* Endpoint Selection */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">📡 Endpoint</label>
              <select
                onChange={(e) => handleEndpointChange(parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(cat => (
                  <optgroup key={cat} label={cat}>
                    {endpoints.map((ep, idx) =>
                      ep.category === cat ? (
                        <option key={idx} value={idx}>
                          {ep.method} {ep.path} — {ep.name}
                        </option>
                      ) : null
                    )}
                  </optgroup>
                ))}
              </select>

              <div className="mt-3 flex items-center gap-2">
                <span className={`px-3 py-1 rounded text-xs font-bold ${
                  selectedEndpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                  selectedEndpoint.method === 'POST' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {selectedEndpoint.method}
                </span>
                <code className="text-purple-400 text-sm font-mono">{selectedEndpoint.path}</code>
              </div>
            </div>

            {/* Fields */}
            {selectedEndpoint.fields.length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <label className="block text-sm font-medium text-gray-300 mb-4">📝 Parâmetros</label>
                <div className="space-y-4">
                  {selectedEndpoint.fields.map(field => (
                    <div key={field.name}>
                      <label className="block text-xs text-gray-500 mb-1">
                        {field.name} {field.required && <span className="text-red-400">*</span>}
                      </label>
                      <input
                        type={field.type}
                        value={fieldValues[field.name] || ''}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {loading ? '⏳ Enviando...' : '🚀 Enviar Requisição'}
            </button>
          </div>

          {/* Response Panel */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <span className="text-white font-semibold">Resposta</span>
              <div className="flex items-center gap-3">
                {responseStatus !== null && (
                  <span className={`px-3 py-1 rounded text-xs font-bold ${
                    responseStatus >= 200 && responseStatus < 300 ? 'bg-green-500/20 text-green-400' :
                    responseStatus >= 400 ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {responseStatus}
                  </span>
                )}
                {responseTime !== null && (
                  <span className="text-gray-500 text-xs">{responseTime}ms</span>
                )}
              </div>
            </div>
            <div className="p-6 min-h-[400px] max-h-[600px] overflow-auto">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : response ? (
                <>
                  <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{response}</pre>
                  {downloadUrls && (
                    <div className="mt-4 flex flex-wrap gap-3 border-t border-gray-800 pt-4">
                      {downloadUrls.video && (
                        <button
                          onClick={() => handleDownload(downloadUrls.video!, 'video')}
                          disabled={downloading === 'video'}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition disabled:opacity-50"
                        >
                          {downloading === 'video' ? '⏳ Baixando...' : '🎬 Baixar Vídeo'}
                        </button>
                      )}
                      {downloadUrls.hd && (
                        <button
                          onClick={() => handleDownload(downloadUrls.hd!, 'hd')}
                          disabled={downloading === 'hd'}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition disabled:opacity-50"
                        >
                          {downloading === 'hd' ? '⏳ Baixando...' : '🎬 Baixar HD'}
                        </button>
                      )}
                      {downloadUrls.sd && (
                        <button
                          onClick={() => handleDownload(downloadUrls.sd!, 'sd')}
                          disabled={downloading === 'sd'}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition disabled:opacity-50"
                        >
                          {downloading === 'sd' ? '⏳ Baixando...' : '📱 Baixar SD'}
                        </button>
                      )}
                      {downloadUrls.audio && (
                        <button
                          onClick={() => handleDownload(downloadUrls.audio!, 'audio')}
                          disabled={downloading === 'audio'}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition disabled:opacity-50"
                        >
                          {downloading === 'audio' ? '⏳ Baixando...' : '🎵 Baixar Áudio'}
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-600">
                  <div className="text-center">
                    <p className="text-4xl mb-4">🧪</p>
                    <p>Selecione um endpoint e clique em enviar</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
