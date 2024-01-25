import { SearchIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import useSearchStore from '../useSearchStore';

function SearchButton() {
  const setShowSearchBox = useSearchStore(s => s.setShowSearchBox);

  return (
    <Button
      justifyContent='left'
      leftIcon={<SearchIcon />}
      textColor='gray.500'
      width={{ base: '10rem', md: '20rem', lg: '30rem' }}
      cursor='text'
      onClick={() => setShowSearchBox(true)}
    >
      Search
    </Button>
  );
}

export default SearchButton;
