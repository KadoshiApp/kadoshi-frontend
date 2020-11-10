import axios from 'axios';

const BASE_URL = 'https://kadoshiservices.herokuapp.com/api/';

class Axios {
  init = () => {
    const token = localStorage.getItem('x-access-token');
    const axiosConnect = axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: token, accept: 'application/json' },
    });

    return axiosConnect;
  };
}
export default new Axios();
