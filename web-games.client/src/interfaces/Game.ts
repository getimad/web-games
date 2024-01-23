import Genre from './Genre';
import Platform from './Platform';

interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  released: string;
  website: string;
}

export default Game;
