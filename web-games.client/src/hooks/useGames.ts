import GameQuery from '../interfaces/GameQuery';
import Game from '../interfaces/Game';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import FetchResponse from '../interfaces/FetchResponse';

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>>({
  queryKey: ['games', gameQuery],
  queryFn: () =>
    apiClient
      .get<FetchResponse<Game>>('/games', {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.order?.value
        }
      })
      .then((res) => res.data),
  staleTime: 5 * 60 * 1000  // 5 minutes
});

export default useGames;
