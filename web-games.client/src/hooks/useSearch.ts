import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from './useData';
import Game from '../interfaces/Game';
import apiClient from '../services/api-client';

const useSearch = (searchQuery: string) => useQuery<FetchResponse<Game>>({
  queryKey: ['searchGames', searchQuery],
  queryFn: () =>
    apiClient
      .get<FetchResponse<Game>>('/games', {
        params: {
          search: searchQuery
        }
      })
      .then((res) => res.data),
  staleTime: 0,
  gcTime: 0
});

export default useSearch;
