// components/AuthProvider.tsx
// Context de autenticação global

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi, User } from '@/lib/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Carrega token do localStorage ao montar
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      loadUser(storedToken);
    } else {
      setLoading(false);
    }
  }, []);

  // Carrega dados do usuário
  const loadUser = async (authToken: string) => {
    try {
      const response = await authApi.getMe(authToken);
      setUser(response.user);
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async (email: string, password: string) => {
    try {
      const response = await authApi.login({ email, password });
      setToken(response.token);
      setUser(response.user);
      localStorage.setItem('token', response.token);
    } catch (error) {
      throw error;
    }
  };

  // Registro
  const register = async (name: string, email: string, password: string, phone?: string) => {
    try {
      const response = await authApi.register({ name, email, password, phone });
      setToken(response.token);
      setUser(response.user);
      localStorage.setItem('token', response.token);
    } catch (error) {
      throw error;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  // Atualiza dados do usuário
  const refreshUser = async () => {
    if (token) {
      await loadUser(token);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
}
