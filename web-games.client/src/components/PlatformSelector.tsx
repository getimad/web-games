import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  selected?: number;
  onSelect: (platformId: number) => void;
}

function PlatformSelector({ selected, onSelect }: Props) {
  const { data } = usePlatforms();
  const platform = data?.results.find(platform => platform.id === selected);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{platform?.name ?? 'Platforms'}</MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem key={platform?.id} onClick={() => onSelect(platform?.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
