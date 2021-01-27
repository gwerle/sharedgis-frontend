import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333'
      : 'http://ambiente-producao.com',
  headers: { Authorization: `Bearer ${Cookies.get('token')}` },
});

export default api;
