import { Box, Flex, Image, Spacer, useColorMode } from '@chakra-ui/react';
import whiteLogo from '../assets/logo-white.svg';
import blackLogo from '../assets/logo-black.svg';
import ToggleThemeSwitch from './ToggleThemeSwitch';

function NavBar() {
  const { colorMode } = useColorMode();

  return (
    <Box backgroundColor={colorMode === 'dark' ? 'oGray.900' : 'oGray.50'} backdropFilter='saturate(180%) blur(10px)'>
      <Flex px={5} h={16} alignItems='center' justifyContent='space-between'>
        <Image src={colorMode === 'dark' ? whiteLogo : blackLogo} boxSize={9} />
        <Spacer />
        <ToggleThemeSwitch />
      </Flex>
    </Box>
  );
}

export default NavBar;
