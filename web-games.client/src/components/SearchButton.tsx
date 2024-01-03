import { SearchIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

function SearchButton() {
  return (
    <Button
      justifyContent='left'
      leftIcon={<SearchIcon />}
      textColor='gray.500'
      width='20%'
      minWidth='150px'
      cursor='text'
    >
      Search
    </Button>
  );
}

export default SearchButton;
