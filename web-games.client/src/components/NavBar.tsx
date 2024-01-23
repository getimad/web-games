import { Box, Flex, Image, Spacer, useColorMode } from '@chakra-ui/react';
import whiteLogo from '../assets/logo-white.svg';
import blackLogo from '../assets/logo-black.svg';
import ToggleThemeSwitch from './ToggleThemeSwitch';

function NavBar() {
  const { colorMode } = useColorMode();

  return (
    <Box backgroundColor={colorMode === 'dark' ? 'oGray.900' : 'oGray.50'} backdropFilter='saturate(180%) blur(10px)' position='fixed' w='100%' zIndex='200'>
      <Flex marginX='3rem' h={16} alignItems='center' justifyContent='space-between'>
        <Image src={colorMode === 'dark' ? whiteLogo : blackLogo} boxSize={9} />
        <Spacer />
        <ToggleThemeSwitch />
      </Flex>
    </Box>
  );
}

export default NavBar;
