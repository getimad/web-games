import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, InputRightElement, Spinner } from '@chakra-ui/react';

interface Props {
  query: string;
  isSearching: boolean;
  onSearch: (query: string) => void;
}

function SearchBox({ query, isSearching, onSearch }: Props) {
  return (
    <InputGroup>
      <InputLeftElement alignContent='center' height='80px' width='80px'>
        <SearchIcon color='gray.500' boxSize={7} />
      </InputLeftElement>
      <Input
        autoFocus
        variant='uns'
        placeholder='Search'
        height='80px'
        paddingLeft='80px'
        fontSize={24}
        borderRadius='15px'
        fontWeight='500'
        boxShadow='xl'
        value={query}
        onChange={event => onSearch(event.target.value)} />
      <InputRightElement alignContent='center' height='80px' width='80px'>
        {isSearching &&
          <Spinner
          thickness='4px'
          speed='0.65s'
          color='gray.500'
          size='lg' />}
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchBox;
