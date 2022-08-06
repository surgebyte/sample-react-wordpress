import axios from "axios";

const api = axios.create({
    baseURL: 'http://3.145.50.237/'
  });

  export default api;