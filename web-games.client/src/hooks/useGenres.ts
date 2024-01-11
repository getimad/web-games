import { useQuery } from '@tanstack/react-query';
import Genre from '../interfaces/Genre';
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';

const useGenres = () => useQuery<FetchResponse<Genre>>({
  queryKey: ['genres'],
  queryFn: () =>
    apiClient
      .get<FetchResponse<Genre>>('/genres')
      .then((res) => res.data),
  staleTime: 24 * 60 * 60 * 1000,  // = 1 day
});

export default useGenres;
