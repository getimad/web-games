import { useQuery } from '@tanstack/react-query';
import Game from '../interfaces/Game';
import FetchResponse from '../interfaces/FetchResponse';
import APIClient from '../services/api-client';
import useSearchStore from '../useSearchStore';

const limit = 9;
const apiClient = new APIClient<Game>('/games');

const useSearch = () => {
  const searchQuery = useSearchStore(s => s.searchQuery);

  return useQuery<FetchResponse<Game>>({
    queryKey: ['searchGames', searchQuery],
    queryFn: () => apiClient.getAll({
      params: {
        search: searchQuery,
        page_size: limit
      }
    }),
    staleTime: 0,
    gcTime: 0
  })
};

export default useSearch;
