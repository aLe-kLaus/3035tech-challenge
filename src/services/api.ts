import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/week?api_key=680696aacd6dd222b951702b83ddb9e5'
});

export default api;
