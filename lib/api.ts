// lib/api.ts
// Cliente para comunicação com a API

const API_BASE_URL = '';

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

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
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

export default apiFetch;
