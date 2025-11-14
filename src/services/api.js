import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.request.use(
  (config) => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user = JSON.parse(userString);
        const token = user.token;
        
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.error("Failed to parse user from localStorage in interceptor:", e);
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;