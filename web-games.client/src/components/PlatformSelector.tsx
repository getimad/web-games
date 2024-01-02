import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
  selected: Platform | null;
  onSelect: (platform: Platform) => void;
}

function PlatformSelector({ selected, onSelect }: Props) {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selected?.name ?? 'Platforms'}</MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem key={platform?.id} onClick={() => onSelect(platform)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
