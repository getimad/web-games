import { SimpleGrid } from '@chakra-ui/react';
import SearchResultItem from './SearchResultItem';
import useSearch from '../hooks/useSearch';
import { useEffect } from 'react';

interface Props {
  searchQuery: string;
  onReady: (onReady: boolean) => void;
}

function SearchResult({ searchQuery, onReady }: Props) {
  const { data, isLoading } = useSearch(searchQuery);

  useEffect(() => {
    onReady(isLoading);
  }, [isLoading, onReady]);

  return (
    <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(250px, 1fr))' overflowY='scroll'>
      {!isLoading
        && data?.results.map((game, index) => <SearchResultItem key={index} game={game} />)}
    </SimpleGrid>
  );
}

export default SearchResult;
