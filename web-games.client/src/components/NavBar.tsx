import { Box, Flex, Image, Spacer } from '@chakra-ui/react';
import logo from '../assets/getimad-logo-white.svg';
import ToggleThemeSwitch from './ToggleThemeSwitch';

function NavBar() {
  return (
    <Box px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <Image src={logo} boxSize={12} />
        <Spacer />
        <ToggleThemeSwitch />
      </Flex>
    </Box>
  );
}

export default NavBar;
