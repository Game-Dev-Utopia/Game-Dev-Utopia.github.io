import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    // Add any other headers as needed
  },
});


export default instance;
