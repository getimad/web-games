import axios, { AxiosRequestConfig } from 'axios';
import FetchResponse from '../interfaces/FetchResponse';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '004082a1c80c450ca71a0765c011de2a'
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config);
    return res.data;
  };

  get = async (id: number | string) => {
    const res = await axiosInstance
      .get<T>(this.endpoint + '/' + id);

    return res.data;
  };
}

export default APIClient;
