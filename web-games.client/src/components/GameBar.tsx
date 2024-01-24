import { HStack, Stack } from '@chakra-ui/react';
import PlatformSelector from './PlatformSelector';
import SortSelector from './SortSelector';

function GameBar() {
  return (
    <Stack paddingY={6} gap={6} justifyContent='space-between' direction={['column', null, 'row']} >
      <HStack gap={6}>
        <PlatformSelector />
        <SortSelector />
      </HStack>
    </Stack>
  );
}

export default GameBar;
