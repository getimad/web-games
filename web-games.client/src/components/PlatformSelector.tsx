import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

function PlatformSelector() {
  const { gameQuery, setPlatformId } = useGameQueryStore();

  const { data } = usePlatforms();
  const platform = data?.results.find(platform => platform.id === gameQuery.platformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{platform?.name ?? 'Platforms'}</MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem key={platform?.id} onClick={() => setPlatformId(platform?.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
