import { useState } from 'react';
import { Button, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import Order from '../interfaces/Order';

interface Props {
  selected: Order | null;
  onSelect: (sortOrder: Order) => void;
}

function SortSelector({ selected, onSelect }: Props) {
  const [target, setTarget] = useState<Order | null>({ label: 'Relevance', value: '' });
  const [orderBy, setOrderBy] = useState<string>('asc');

  const getFirstOrDefaultValue = (value: string | string[]): string => {
    if (typeof value !== 'string')
      return value[0];

    return value;
  };

  const onSelectMenu = () => {
    return onSelect({
      label: target?.label ?? 'Relevance',
      value: (orderBy === 'asc' ? '' : '-') + target?.value
    });
  };

  const sortOrders: Order[] = [
    { label: 'Relevance', value: '' },
    { label: 'Date added', value: 'added' },
    { label: 'Name', value: 'name' },
    { label: 'Release date', value: 'released' },
    { label: 'Popularity', value: 'metacritic' },
    { label: 'Average rating', value: 'rating' }
  ];

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selected?.label ?? 'Relevance'}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          defaultValue=''
          title='Order By'
          type='radio'
          value={target?.value}
          onChange={value => {
            setTarget(sortOrders.find(o => o.value === value) ?? null);
            onSelectMenu();
          }}
        >
          {sortOrders.map(order =>
            <MenuItemOption
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItemOption>
          )}
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup
          defaultValue='asc'
          type='radio'
          value={orderBy}
          onChange={value => {
            setOrderBy(getFirstOrDefaultValue(value));
            onSelectMenu();
          }}
        >
          <MenuItemOption value='asc'>Ascending</MenuItemOption>
          <MenuItemOption value='desc'>Descending</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
