import { useInfiniteQuery } from '@tanstack/react-query';
import Game from '../interfaces/Game';
import FetchResponse from '../interfaces/FetchResponse';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';

const apiClient = new APIClient<Game>('/games');

const useGames = (pageSize: number) => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        page_size: pageSize,
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.orderValue,
        page: pageParam,
      }
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 5 * 60 * 1000  // 5 minutes
  })
};

export default useGames;
