import { HStack } from '@chakra-ui/react';
import PlatformSelector from './PlatformSelector';
import Platform from '../interfaces/Platform';
import SortSelector from './SortSelector';
import Order from '../interfaces/Order';
import SearchButton from './SearchButton';
import SearchContainer from './SearchContainer';
import { useState } from 'react';

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
  selectedOrder: Order | null;
  onSelectOrder: (order: Order) => void;
}

function GameBar({ selectedPlatform, onSelectPlatform, selectedOrder, onSelectOrder }: Props) {
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);

  return (
    <>
      <HStack paddingY={6} gap={6} justifyContent='space-between'>
        <HStack gap={6}>
          <PlatformSelector selected={selectedPlatform} onSelect={(platform) => onSelectPlatform(platform)} />
          <SortSelector selected={selectedOrder} onSelect={order => onSelectOrder(order)} />
        </HStack>
        <SearchButton onOpenSearchBox={open => setOpenSearchBox(open)} />
      </HStack>
      {openSearchBox && <SearchContainer onOpenSearchBox={close => setOpenSearchBox(close)} />}
    </>
  );
}

export default GameBar;
