import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

function SearchBox() {
  return (
    <InputGroup>
      <InputLeftElement alignContent='center' height='80px' width='80px'>
        <SearchIcon color='gray.500' boxSize={6} />
      </InputLeftElement>
      <Input
        bg='white'
        variant='uns'
        placeholder='Search'
        height='80px'
        paddingLeft='80px'
        fontSize={24}
        borderRadius='15px'
        fontWeight='500'
        boxShadow='xl' />
    </InputGroup>
  );
}

export default SearchBox;
