import { Box, Center, Stack } from '@chakra-ui/react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import { useState } from 'react';

interface Props {
  onOpenSearchBox: (close: boolean) => void;
}

function SearchContainer({ onOpenSearchBox }: Props) {
  const [searchQuery, SetSearchQuery] = useState<string>('');
  const [isSearching, SetIsSearching] = useState<boolean>(false);

  return (
    <Center
      h='100%'
      w='100%'
      position='fixed'
      top='0px'
      right='0px'
      zIndex='300'
    >
      <Box
        bg='rgba(0, 0, 0, 0.7)'
        h='100%'
        w='100%'
        position='absolute'
        zIndex='301'
        backdropFilter='saturate(180%) blur(9px)'
        onClick={() => onOpenSearchBox(false)}
      />
      <Stack h={{ base: '90vh', md: '85vh' }} w={{ base: '90vw', md: '60vw' }} zIndex='302' bottom='0' position='fixed'>
        <SearchBox isSearching={isSearching} query={searchQuery} onSearch={query => SetSearchQuery(query)} />
        <SearchResult onReady={isLoading => SetIsSearching(isLoading)} searchQuery={searchQuery} />
      </Stack>
    </Center>
  );
}

export default SearchContainer;
