import { useQuery } from '@tanstack/react-query';
import Genre from '../interfaces/Genre';
import FetchResponse from '../interfaces/FetchResponse';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery<FetchResponse<Genre>>({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000,  // = 1 day
});

export default useGenres;
