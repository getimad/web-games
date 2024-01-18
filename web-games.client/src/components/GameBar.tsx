import { HStack, Stack } from '@chakra-ui/react';
import PlatformSelector from './PlatformSelector';
import SortSelector from './SortSelector';
import Order from '../interfaces/Order';
import SearchButton from './SearchButton';
import SearchContainer from './SearchContainer';
import { useEffect, useState } from 'react';

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platformId: number) => void;
  selectedOrder: Order | null;
  onSelectOrder: (order: Order) => void;
}

function GameBar({ selectedPlatformId, onSelectPlatform, selectedOrder, onSelectOrder }: Props) {
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = openSearchBox ? 'hidden' : 'visible';
  }, [openSearchBox]);


  return (
    <>
      <Stack paddingY={6} gap={6} justifyContent='space-between' direction={['column', null, 'row']} >
        <HStack gap={6}>
          <PlatformSelector selected={selectedPlatformId} onSelect={(platformId) => onSelectPlatform(platformId)} />
          <SortSelector selected={selectedOrder} onSelect={order => onSelectOrder(order)} />
        </HStack>
        <SearchButton onOpenSearchBox={open => setOpenSearchBox(open)} />
      </Stack>
      {openSearchBox && <SearchContainer onOpenSearchBox={close => setOpenSearchBox(close)} />}
    </>
  );
}

export default GameBar;
