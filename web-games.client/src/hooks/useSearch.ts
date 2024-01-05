import useData from './useData';
import { Game } from './useGames';

const useSearch = (searchQuery: string) => useData<Game>(
  '/games', {
    params: {
      search: searchQuery
    }
  },
  [searchQuery]
);

export default useSearch;
