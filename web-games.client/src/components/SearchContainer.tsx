import { Box, Center, Stack } from '@chakra-ui/react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import useSearchStore from '../useSearchStore';

function SearchContainer() {
  const setShowSearchBox = useSearchStore(s => s.setShowSearchBox);

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
        onClick={() => setShowSearchBox(false)}
      />
      <Stack maxH={{ base: '90vh', md: '85vh' }} w={{ base: '90vw', md: '60vw' }} zIndex='302' top={{ base: '10vh', md: '15vh' }} position='fixed'>
        <SearchBox />
        <SearchResult />
      </Stack>
    </Center>
  );
}

export default SearchContainer;
