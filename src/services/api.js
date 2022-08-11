import axios from "axios";

const api = axios.create({
    baseURL: 'http://3.145.50.237/'
    //baseURL: 'http://13.57.27.125'
  });

  export default api;