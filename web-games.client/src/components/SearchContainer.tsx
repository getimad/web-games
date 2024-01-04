import { Center, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

function SearchContainer() {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <Center bg='rgba(0, 0, 0, 0.7)' h='100%' w='100%' position='fixed' top='0px' right='0px'>
      <Stack h="60%" w="60%" minH='500px' minW='400px'>
        <SearchBox />
        <SearchResult />
      </Stack>
    </Center> 
  );
}

export default SearchContainer;
