import { HStack } from '@chakra-ui/react';
import PlatformSelector from './PlatformSelector';
import Platform from '../interfaces/Platform';
import SortSelector from './SortSelector';
import Order from '../interfaces/Order';

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
  selectedOrder: Order | null;
  onSelectOrder: (order: Order) => void;
}

function GameBar({ selectedPlatform, onSelectPlatform, selectedOrder, onSelectOrder }: Props) {
  return (
    <HStack paddingY={6}>
      <PlatformSelector selected={selectedPlatform} onSelect={(platform) => onSelectPlatform(platform)} />
      <SortSelector selected={selectedOrder} onSelect={order => onSelectOrder(order)} />
    </HStack>
  );
}

export default GameBar;
