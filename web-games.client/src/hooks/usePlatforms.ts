import { useQuery } from '@tanstack/react-query';
import Platform from '../interfaces/Platform';
import FetchResponse from '../interfaces/FetchResponse';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000
});

export default usePlatforms;
