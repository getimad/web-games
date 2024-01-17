import { useInfiniteQuery } from '@tanstack/react-query';
import GameQuery from '../interfaces/GameQuery';
import Game from '../interfaces/Game';
import FetchResponse from '../interfaces/FetchResponse';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery, pageSize: number) => useInfiniteQuery<FetchResponse<Game>>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam = 1 }) => apiClient.getAll({
    params: {
      page_size: pageSize,
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.order?.value,
      page: pageParam,
    }
  }),
  initialPageParam: 1,
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime: 5 * 60 * 1000  // 5 minutes
});

export default useGames;
