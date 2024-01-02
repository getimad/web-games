import { Genre } from '../hooks/useGenres';
import Platform from '../interfaces/Platform';
import Order from './Order';

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: Order | null;
}

export default GameQuery;
