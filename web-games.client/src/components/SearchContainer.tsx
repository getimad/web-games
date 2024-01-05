import { Box, Center, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

interface Props {
  onOpenSearchBox: (close: boolean) => void;
}

function SearchContainer({ onOpenSearchBox }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <Center
      h='100%'
      w='100%'
      position='fixed'
      top='0px'
      right='0px'
      zIndex='1'
    >
      <Box
        bg='rgba(0, 0, 0, 0.7)'
        h='100%'
        w='100%'
        position='absolute'
        zIndex='2'
        onClick={() => onOpenSearchBox(false)} />
      <Stack h="60%" w="60%" minH='500px' minW='400px' zIndex='3'>
        <SearchBox />
        <SearchResult />
      </Stack>
    </Center> 
  );
}

export default SearchContainer;
