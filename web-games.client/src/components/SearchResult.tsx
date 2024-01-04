import { SimpleGrid } from '@chakra-ui/react';
import SearchResultItem from './SearchResultItem';

function SearchResult() {
  return (
    <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
      {Array.from({ length: 9 }).map((_, i) => {
        return <SearchResultItem key={i} />;
      })}
    </SimpleGrid>
  );
}

export default SearchResult;
