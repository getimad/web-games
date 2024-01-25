import { List } from '@chakra-ui/react';
import SearchResultItem from './SearchResultItem';
import useSearch from '../hooks/useSearch';
import { useEffect } from 'react';
import useSearchStore from '../useSearchStore';

function SearchResult() {
  const setIsSearching = useSearchStore(s => s.setIsSearching);
  const { data, isLoading } = useSearch();

  useEffect(() => {
    setIsSearching(isLoading);
  }, [isLoading]);

  return (
    <List
      spacing='0.5rem'
      overflowY='scroll'
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        }
      }}
    >
      {!isLoading
        && data?.results.map((game) => <SearchResultItem key={game.id} game={game} />)}
    </List>
  );
}

export default SearchResult;
