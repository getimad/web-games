import GameQuery from '../interfaces/GameQuery';
import useData from './useData';
import Platform from '../interfaces/Platform';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => useData<Game>(
  '/games', {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.order?.value
    }
  },
  [gameQuery]
);

export default useGames;
