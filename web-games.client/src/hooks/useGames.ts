import GameQuery from '../interfaces/GameQuery';
import useData from './useData';
import Game from '../interfaces/Game';

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
