import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3333'
      : 'http://ambiente-producao.com',
});

export default api;
