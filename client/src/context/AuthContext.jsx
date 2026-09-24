import { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
import axiosInstance from '../api/axiosInstance.js';

const AuthContext = createContext(null);

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload.user, token: action.payload.token };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, token: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.token) {
      localStorage.setItem('token', state.token);
    } else {
      localStorage.removeItem('token');
    }
  }, [state.token]);

  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const { data } = await axiosInstance.post('/auth/login', { email, password });
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      return data;
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      dispatch({ type: 'LOGIN_ERROR', payload: message });
      throw err;
    }
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  const value = useMemo(
    () => ({ ...state, login, logout, isAuthenticated: Boolean(state.token) }),
    [state]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}