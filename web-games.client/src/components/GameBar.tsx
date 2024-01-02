import { HStack } from '@chakra-ui/react';
import PlatformSelector from './PlatformSelector';
import { Platform } from '../hooks/useGames';

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

function GameBar({ selectedPlatform, onSelectPlatform }: Props) {
  return (
    <HStack paddingY={6}>
      <PlatformSelector selected={selectedPlatform} onSelect={(platform) => onSelectPlatform(platform)} />
    </HStack>
  );
}

export default GameBar;
