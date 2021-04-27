import axios from 'axios';

export const flagImageUrl = 'https://flagcdn.com/120x90/';

const url = 'http://localhost:3001';

const instance = axios.create({
  baseURL: url,
});

export default instance;
