import axios, { AxiosRequestConfig } from 'axios';
import FetchResponse from '../interfaces/FetchResponse';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '97be1ab74a4244239ef950bf6f10b7e4'
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
