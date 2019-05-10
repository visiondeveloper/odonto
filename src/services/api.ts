import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://api.github.com',
  baseURL : 'https://odonto-content-api.herokuapp.com/api/V1',
});

//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default api;
