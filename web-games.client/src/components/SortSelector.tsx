import { useEffect, useRef, useState } from 'react';
import { Button, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const mainMenu = [
  { id: 0, label: 'Relevance', value: '' },
  { id: 1, label: 'Date added', value: 'added' },
  { id: 2, label: 'Name', value: 'name' },
  { id: 3, label: 'Release date', value: 'released' },
  { id: 4, label: 'Popularity', value: 'metacritic' },
  { id: 5, label: 'Average rating', value: 'rating' }
];

function SortSelector() {
  const setOrderValue = useGameQueryStore(s => s.setOrderValue);

  const [order, setOrder] = useState({ type: '', by: '' });

  const firstRenderRef = useRef(true);
  useEffect(() => {
    // Prevent sending a request on the initial render of the component
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    setOrderValue(order.by + order.type);
  }, [order])

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {mainMenu.find(item => item.value === order.type)?.label}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          title='Order By'
          type='radio'
          value={order.type}
          onChange={(event) => setOrder({ ...order, type: event as string })}
        >
          {mainMenu.map(item =>
            <MenuItemOption key={item.id} value={item.value}>
              {item.label}
            </MenuItemOption>
          )}
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup
          type='radio'
          value={order.by}
          onChange={(event) => setOrder({ ...order, by: event as string })}
        >
          <MenuItemOption value=''>Ascending</MenuItemOption>
          <MenuItemOption value='-'>Descending</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
