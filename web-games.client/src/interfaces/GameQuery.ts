import Platform from './Platform';
import Order from './Order';

interface GameQuery {
  genreId?: number;
  platform: Platform | null;
  order: Order | null;
}

export default GameQuery;
