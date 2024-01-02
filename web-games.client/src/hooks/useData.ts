import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FerchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(path: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient.get<FerchResponse<T>>(path, { signal: controller.signal, ...requestConfig })
      .then(res => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError)
          return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, deps ? deps : []);

  return { data, error, isLoading };
};

export default useData;