import useData from './useData';
import Game from '../interfaces/Game';

const useSearch = (searchQuery: string) => useData<Game>(
  '/games', {
    params: {
      search: searchQuery
    }
  },
  [searchQuery]
);

export default useSearch;
