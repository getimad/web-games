import { SimpleGrid } from '@chakra-ui/react';
import SearchResultItem from './SearchResultItem';
import useSearch from '../hooks/useSearch';

interface Props {
  searchQuery: string;
}

function SearchResult({ searchQuery }: Props) {
  const { data, error, isLoading } = useSearch(searchQuery);

  return (
    <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
      {data.map((game, index) => <SearchResultItem key={index} game={game} />)}

      {/* isLoading: Show spinner */}

    </SimpleGrid>
  );
}

export default SearchResult;
