// ============================================
// HOUSE OF RESTORATION - AUTH HOOK
// Authentication management hook
// ============================================

import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth as useAuthStore } from '../store';
import { api } from '../services';
import { User, AuthState } from '../types';

// ============================================
// INTERFACES
// ============================================

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  firstName: string;
  lastName: string;
  phone?: string;
  role?: 'client' | 'corporate';
}

// ============================================
// HOOK
// ============================================

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    user,
    token,
    isAuthenticated,
    isLoading: storeLoading,
    error: storeError,
    login: storeLogin,
    logout: storeLogout,
    updateProfile: storeUpdateProfile,
  } = useAuthStore();

  const [isLoading, setIsLoading] = useState(storeLoading);
  const [error, setError] = useState<string | null>(storeError);

  // ============================================
// EFFECTS
// ============================================

  useEffect(() => {
    setIsLoading(storeLoading);
    setError(storeError);
  }, [storeLoading, storeError]);

  // ============================================
// LOGIN
// ============================================

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<User | null> => {
      setIsLoading(true);
      setError(null);

      try {
        // In production, this would call the API
        // const response = await api.post('/auth/login', credentials);
        // const { user, token } = response.data.data;
        
        // For demo purposes, simulate a successful login
        const mockUser: User = {
          id: 'user-' + Math.random().toString(36).substr(2, 9),
          email: credentials.email,
          firstName: 'Test',
          lastName: 'User',
          role: 'client',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        const mockToken = 'mock-token-' + Math.random().toString(36).substr(2, 32);
        
        // Store in Zustand
        storeLogin(mockUser, mockToken);
        
        // Store token in localStorage
        localStorage.setItem('house_of_restoration_token', mockToken);
        
        // Return user
        return mockUser;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Login failed';
        setError(message);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [storeLogin]
  );

  // ============================================
// REGISTER
// ============================================

  const register = useCallback(
    async (data: RegisterData): Promise<User | null> => {
      setIsLoading(true);
      setError(null);

      try {
        // In production, this would call the API
        // const response = await api.post('/auth/register', data);
        // const { user, token } = response.data.data;
        
        // For demo purposes
        const mockUser: User = {
          id: 'user-' + Math.random().toString(36).substr(2, 9),
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          role: data.role || 'client',
          phone: data.phone,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        const mockToken = 'mock-token-' + Math.random().toString(36).substr(2, 32);
        
        storeLogin(mockUser, mockToken);
        localStorage.setItem('house_of_restoration_token', mockToken);
        
        return mockUser;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Registration failed';
        setError(message);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [storeLogin]
  );

  // ============================================
// LOGOUT
// ============================================

  const logout = useCallback(() => {
    storeLogout();
    localStorage.removeItem('house_of_restoration_token');
    navigate('/');
  }, [storeLogout, navigate]);

  // ============================================
// LOAD USER FROM TOKEN
// ============================================

  const loadUserFromToken = useCallback(async () => {
    const token = localStorage.getItem('house_of_restoration_token');
    
    if (!token) {
      storeLogout();
      return null;
    }

    try {
      // In production, this would validate the token and fetch user
      // const response = await api.get('/auth/me');
      // const { user } = response.data.data;
      // storeLogin(user, token);
      
      // For demo, return the existing user if available
      if (user) {
        return user;
      }
      
      // Otherwise create a mock user
      const mockUser: User = {
        id: 'demo-user',
        email: 'demo@houseofrestoration.co.za',
        firstName: 'Demo',
        lastName: 'User',
        role: 'client',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      storeLogin(mockUser, token);
      return mockUser;
    } catch (err) {
      storeLogout();
      localStorage.removeItem('house_of_restoration_token');
      return null;
    }
  }, [storeLogin, storeLogout, user]);

  // ============================================
// FORGOT PASSWORD
// ============================================

  const forgotPassword = useCallback(
    async (email: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        // In production
        // await api.post('/auth/forgot-password', { email });
        return true;
      } catch (err) {
        setError('Failed to send reset email');
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // ============================================
// RESET PASSWORD
// ============================================

  const resetPassword = useCallback(
    async (token: string, password: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        // In production
        // await api.post('/auth/reset-password', { token, password });
        return true;
      } catch (err) {
        setError('Failed to reset password');
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // ============================================
// RETURN
// ============================================

  return {
    // State
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    
    // Methods
    login,
    register,
    logout,
    loadUserFromToken,
    forgotPassword,
    resetPassword,
    updateProfile: storeUpdateProfile,
    
    // Helpers
    isAdmin: user?.role === 'admin' || user?.role === 'nkgono',
    isNkgono: user?.role === 'nkgono',
    isClient: user?.role === 'client',
    isCorporate: user?.role === 'corporate',
  };
};

export default useAuth;
