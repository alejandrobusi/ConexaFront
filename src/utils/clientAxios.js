import axios from 'axios';

const URL_BASE = import.meta.env.VITE_API_URL_BASE;

const clientAxios = axios.create({
  baseURL: URL_BASE,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default clientAxios;
