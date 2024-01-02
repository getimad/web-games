import Order from '../interfaces/Order';
import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedOrder: Order | null) => useData<Game>(
  '/games', {
    params: {
      genres: selectedGenre?.id,
      platforms: selectedPlatform?.id,
      ordering: selectedOrder?.value
    }
  },
  [
    selectedGenre?.id,
    selectedPlatform?.id,
    selectedOrder?.value
  ]
);

export default useGames;
