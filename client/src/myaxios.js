import axios from 'axios';

export const flagImageUrl = 'https://flagcdn.com/256x192/';

const url = 'https://hadar-demo-project.herokuapp.com';

const instance = axios.create({
  baseURL: url,
});

export default instance;
