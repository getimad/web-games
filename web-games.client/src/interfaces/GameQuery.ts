import Order from './Order';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  order: Order | null;
}

export default GameQuery;
