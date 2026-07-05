// lib/api.ts
// Cliente para comunicação com a API

const API_BASE_URL = 'https://alauda-api.mozhost.shop';

interface FetchOptions extends RequestInit {
  token?: string;
}

/**
 * Wrapper para fetch com tratamento de erros
 */
async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(fetchOptions.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...fetchOptions,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.message || 'Erro na requisição');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Erro desconhecido ao conectar com a API');
  }
}

// ===== TIPOS =====

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    createdAt: string;
    totalApiKeys?: number;
    lastLogin?: string | null;
    loginCount?: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  totalApiKeys: number;
  lastLogin: string | null;
  loginCount: number;
  createdAt: string;
}

export interface ApiKey {
  id: string;
  key: string;
  fullKey: string;
  plan: 'free' | 'basic' | 'pro' | 'premium';
  credits: number;
  active: boolean;
  suspended: boolean;
  suspensionReason: string | null;
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  requestsToday: number;
  lastUsedAt: string | null;
  createdAt: string;
  expiresAt: string;
  daysUntilExpiration: number;
  successRate: string;
}

// ===== AUTH API =====

export const authApi = {
  /**
   * Registra novo usuário
   */
  register: async (data: RegisterData): Promise<AuthResponse> => {
    return apiFetch<AuthResponse>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Faz login
   */
  login: async (data: LoginData): Promise<AuthResponse> => {
    return apiFetch<AuthResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Busca dados do usuário autenticado
   */
  getMe: async (token: string): Promise<{ success: boolean; user: User }> => {
    return apiFetch<{ success: boolean; user: User }>('/api/auth/me', {
      token,
    });
  },

  /**
   * Atualiza dados do usuário
   */
  update: async (
    token: string,
    data: { name?: string; phone?: string }
  ): Promise<{ success: boolean; user: User }> => {
    return apiFetch<{ success: boolean; user: User }>('/api/auth/update', {
      method: 'PUT',
      token,
      body: JSON.stringify(data),
    });
  },

  /**
   * Altera senha
   */
  changePassword: async (
    token: string,
    data: { currentPassword: string; newPassword: string }
  ): Promise<{ success: boolean; message: string }> => {
    return apiFetch<{ success: boolean; message: string }>(
      '/api/auth/change-password',
      {
        method: 'POST',
        token,
        body: JSON.stringify(data),
      }
    );
  },
};

// ===== KEYS API =====

export const keysApi = {
  /**
   * Gera nova API Key
   */
  generate: async (
    token: string,
    plan: 'free' | 'basic' | 'pro' | 'premium' = 'free'
  ): Promise<{
    success: boolean;
    message: string;
    apiKey: string;
    user: {
      userId: string;
      userName: string;
      email: string;
      plan: string;
      credits: number;
    };
    expiresAt: string;
    createdAt: string;
    warning: string;
  }> => {
    return apiFetch('/api/keys/generate', {
      method: 'POST',
      token,
      body: JSON.stringify({ plan }),
    });
  },

  /**
   * Lista API Keys do usuário
   */
  list: async (token: string): Promise<{
    success: boolean;
    count: number;
    keys: ApiKey[];
  }> => {
    return apiFetch('/api/keys/me', { token });
  },

  /**
   * Detalhes de uma key específica
   */
  get: async (token: string, keyId: string): Promise<{
    success: boolean;
    key: ApiKey;
  }> => {
    return apiFetch(`/api/keys/${keyId}`, { token });
  },

  /**
   * Revoga uma API Key
   */
  revoke: async (
    token: string,
    keyId: string
  ): Promise<{ success: boolean; message: string }> => {
    return apiFetch(`/api/keys/${keyId}`, {
      method: 'DELETE',
      token,
    });
  },

  /**
   * Estatísticas gerais
   */
  stats: async (token: string): Promise<{
    success: boolean;
    stats: {
      totalKeys: number;
      activeKeys: number;
      suspendedKeys: number;
      totalCredits: number;
      totalRequests: number;
      successfulRequests: number;
      failedRequests: number;
    };
  }> => {
    return apiFetch('/api/keys/stats/summary', { token });
  },
};

// ===== FACEBOOK API =====

export const facebookApi = {
  download: async (token: string, url: string): Promise<any> => {
    return apiFetch('/api/facebook/download', {
      method: 'POST',
      token,
      body: JSON.stringify({ url }),
    });
  },

  infoOnly: async (token: string, url: string): Promise<any> => {
    return apiFetch('/api/facebook/info-only', {
      method: 'POST',
      token,
      body: JSON.stringify({ url }),
    });
  },

  batch: async (token: string, urls: string[]): Promise<any> => {
    return apiFetch('/api/facebook/batch', {
      method: 'POST',
      token,
      body: JSON.stringify({ urls }),
    });
  },
};

// ===== LYRICS API =====

export const lyricsApi = {
  search: async (token: string, artist: string, title: string): Promise<any> => {
    return apiFetch('/api/lyrics/search', {
      method: 'POST',
      token,
      body: JSON.stringify({ artist, title }),
    });
  },

  suggestions: async (token: string, query: string): Promise<any> => {
    return apiFetch('/api/lyrics/suggestions', {
      method: 'POST',
      token,
      body: JSON.stringify({ query }),
    });
  },

  batch: async (token: string, songs: { artist: string; title: string }[]): Promise<any> => {
    return apiFetch('/api/lyrics/batch', {
      method: 'POST',
      token,
      body: JSON.stringify({ songs }),
    });
  },
};

// ===== CPF API =====

export const cpfApi = {
  consultar: async (token: string, cpf: string): Promise<any> => {
    return apiFetch('/api/cpf/consultar', {
      method: 'POST',
      token,
      body: JSON.stringify({ cpf }),
    });
  },

  validar: async (token: string, cpf: string): Promise<any> => {
    return apiFetch('/api/cpf/validar', {
      method: 'POST',
      token,
      body: JSON.stringify({ cpf }),
    });
  },

  batch: async (token: string, cpfs: string[]): Promise<any> => {
    return apiFetch('/api/cpf/batch', {
      method: 'POST',
      token,
      body: JSON.stringify({ cpfs }),
    });
  },
};

// ===== VOCAL REMOVE API =====

export const vocalRemoveApi = {
  separateUrl: async (token: string, url: string): Promise<any> => {
    return apiFetch('/api/vocalremove/separate-url', {
      method: 'POST',
      token,
      body: JSON.stringify({ url }),
    });
  },
};

// ===== WHATSAPP API =====

export const whatsappApi = {
  activate: async (groupId: string, apiKey: string, groupName?: string, botNumber?: string): Promise<any> => {
    return apiFetch('/api/whatsapp/activate', {
      method: 'POST',
      body: JSON.stringify({ group_id: groupId, api_key: apiKey, group_name: groupName, bot_number: botNumber }),
    });
  },

  validate: async (groupId: string): Promise<any> => {
    return apiFetch('/api/whatsapp/validate', {
      method: 'POST',
      body: JSON.stringify({ group_id: groupId }),
    });
  },

  consume: async (groupId: string): Promise<any> => {
    return apiFetch('/api/whatsapp/consume', {
      method: 'POST',
      body: JSON.stringify({ group_id: groupId }),
    });
  },

  deactivate: async (groupId: string, apiKey: string): Promise<any> => {
    return apiFetch('/api/whatsapp/deactivate', {
      method: 'POST',
      body: JSON.stringify({ group_id: groupId, api_key: apiKey }),
    });
  },

  status: async (groupId: string): Promise<any> => {
    return apiFetch(`/api/whatsapp/status/${groupId}`);
  },
};

// ===== PAYMENT API =====
// mpesa, emola e mercadopago agora batem nas API Routes internas do Next.js
// (/app/api/payment/[method]), que injetam a X-API-Key da Alauda no servidor.
// A key nunca é exposta no bundle do cliente.

async function localPaymentFetch<T>(
  method: 'mpesa' | 'emola' | 'mercadopago',
  token: string,
  data: Record<string, unknown>
): Promise<T> {
  const res = await fetch(`/api/payment/${method}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error || json.message || 'Erro na requisição de pagamento');
  }

  return json;
}

export const paymentApi = {
  mercadopago: async (token: string, data: { email: string; amount: number; description?: string; usuario_id: string }): Promise<any> => {
    return localPaymentFetch('mercadopago', token, data);
  },

  mpesa: async (token: string, data: { valor: string; numero_celular: string; usuario_id: string }): Promise<any> => {
    return localPaymentFetch('mpesa', token, data);
  },

  emola: async (token: string, data: { valor: string; numero_celular: string; usuario_id: string }): Promise<any> => {
    return localPaymentFetch('emola', token, data);
  },

  // Continuam batendo direto na Alauda API (usam só o JWT do usuário, não a X-API-Key da plataforma)
  getStatus: async (token: string, paymentId: string): Promise<any> => {
    return apiFetch(`/api/payment/mercadopago/status/${paymentId}`, { token });
  },

  myPayments: async (token: string, page?: number, limit?: number, status?: string): Promise<any> => {
    const params = new URLSearchParams();
    if (page) params.set('page', String(page));
    if (limit) params.set('limit', String(limit));
    if (status) params.set('status', status);
    const qs = params.toString();
    return apiFetch(`/api/payment/my-payments${qs ? `?${qs}` : ''}`, { token });
  },
};

// ===== TINA AI API =====

export const tinaApi = {
  newSession: async (token: string, sessionName?: string): Promise<any> => {
    return apiFetch('/api/tina/session/new', {
      method: 'POST',
      token,
      body: JSON.stringify({ session_name: sessionName }),
    });
  },

  chat: async (token: string, sessionId: string, message: string): Promise<any> => {
    return apiFetch('/api/tina/chat', {
      method: 'POST',
      token,
      body: JSON.stringify({ session_id: sessionId, message }),
    });
  },

  listSessions: async (token: string, limit?: number): Promise<any> => {
    const qs = limit ? `?limit=${limit}` : '';
    return apiFetch(`/api/tina/sessions${qs}`, { token });
  },

  getHistory: async (token: string, sessionId: string): Promise<any> => {
    return apiFetch(`/api/tina/history/${sessionId}`, { token });
  },

  deleteSession: async (token: string, sessionId: string): Promise<any> => {
    return apiFetch(`/api/tina/session/${sessionId}`, {
      method: 'DELETE',
      token,
    });
  },

  getStats: async (token: string, sessionId: string): Promise<any> => {
    return apiFetch(`/api/tina/stats/${sessionId}`, { token });
  },
};

// ===== XVIDEOS API =====

export const xvideosApi = {
  search: async (token: string, query: string, options?: { page?: number; sort?: string; date?: string; duration?: string }): Promise<any> => {
    return apiFetch('/api/xvideos/search', {
      method: 'POST',
      token,
      body: JSON.stringify({ query, ...options }),
    });
  },

  download: async (token: string, url: string): Promise<any> => {
    return apiFetch('/api/xvideos/download', {
      method: 'POST',
      token,
      body: JSON.stringify({ url }),
    });
  },

  auto: async (token: string, query: string): Promise<any> => {
    return apiFetch('/api/xvideos/auto', {
      method: 'POST',
      token,
      body: JSON.stringify({ query }),
    });
  },
};

// ===== VALIDATE API =====

export const validateApi = {
  validateKey: async (apiKey: string): Promise<any> => {
    return apiFetch('/api/validate/key', {
      headers: { 'X-API-Key': apiKey },
    });
  },
};

export default apiFetch;
