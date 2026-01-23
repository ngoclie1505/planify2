// auth.js - SỬA NHƯ SAU:
import httpPublic from './httpPublic';
import httpAuth from './httpAuth';

export const authApi = {
  login: (payload) => httpPublic.post('/auth/token', payload),
  signup: (payload) => httpPublic.post('/users', payload),
  refresh: (token) => httpPublic.post('/auth/refresh', { token }),

  me: () => httpAuth.get('/users/myInfo'),

  // Sửa logout: NÊN dùng httpPublic (không cần token)
  logout: () => httpPublic.post('/auth/logout'),   // bỏ tham số token
};