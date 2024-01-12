import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import Platform from '../interfaces/Platform';
import FetchResponse from '../interfaces/FetchResponse';

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
  queryKey: ['platforms'],
  queryFn: () =>
    apiClient
      .get<FetchResponse<Platform>>('/platforms/lists/parents')
      .then((res) => res.data),
  staleTime: 24 * 60 * 60 * 1000
});

export default usePlatforms;
