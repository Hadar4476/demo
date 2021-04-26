import axios from 'axios';

const url = 'https://hadar-demo-project.herokuapp.com';

const instance = axios.create({
  baseURL: url,
});

export default instance;
