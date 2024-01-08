import { SearchIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

interface Props {
  onOpenSearchBox: (open: boolean) => void;
}

function SearchButton({ onOpenSearchBox }: Props) {
  return (
    <Button
      justifyContent='left'
      leftIcon={<SearchIcon />}
      textColor='gray.500'
      width='100%'
      maxWidth={['100%', null, '250px']}
      cursor='text'
      onClick={() => onOpenSearchBox(true)}
    >
      Search
    </Button>
  );
}

export default SearchButton;
