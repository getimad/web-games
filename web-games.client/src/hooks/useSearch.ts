import { useQuery } from '@tanstack/react-query';
import Game from '../interfaces/Game';
import FetchResponse from '../interfaces/FetchResponse';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useSearch = (searchQuery: string) => useQuery<FetchResponse<Game>>({
  queryKey: ['searchGames', searchQuery],
  queryFn: () => apiClient.getAll({
    params: {
      search: searchQuery
    }
  }),
  staleTime: 0,
  gcTime: 0
});

export default useSearch;
