import Genre from './Genre';
import Platform from './Platform';
import Order from './Order';

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: Order | null;
}

export default GameQuery;
