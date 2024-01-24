import { List } from '@chakra-ui/react';
import SearchResultItem from './SearchResultItem';
import useSearch from '../hooks/useSearch';
import { useEffect } from 'react';

interface Props {
  searchQuery: string;
  onReady: (onReady: boolean) => void;
}

function SearchResult({ searchQuery, onReady }: Props) {
  if (searchQuery === "") {
    onReady(false);
    return <></>;
  }

  const { data, isLoading } = useSearch(searchQuery);

  useEffect(() => {
    onReady(isLoading);
  }, [isLoading, onReady]);

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
