import { HStack } from '@chakra-ui/react';
import PlatformSelector from './PlatformSelector';

function GameBar() {
  return (
    <HStack paddingY={6}>
      <PlatformSelector />
    </HStack>
  );
}

export default GameBar;
