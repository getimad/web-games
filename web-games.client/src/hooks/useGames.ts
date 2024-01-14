import { useQuery } from '@tanstack/react-query';
import GameQuery from '../interfaces/GameQuery';
import Game from '../interfaces/Game';
import FetchResponse from '../interfaces/FetchResponse';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery, pageSize: number) => useQuery<FetchResponse<Game>>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.getAll({
    params: {
      page_size: pageSize,
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.order?.value
    }
  }),
  staleTime: 5 * 60 * 1000  // 5 minutes
});

export default useGames;
