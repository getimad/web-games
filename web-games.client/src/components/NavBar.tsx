import { Box, Flex, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import whiteLogo from '../assets/logo-white.svg';
import blackLogo from '../assets/logo-black.svg';
import ToggleThemeSwitch from './ToggleThemeSwitch';
import { useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import SearchContainer from './SearchContainer';

function NavBar() {
  const { colorMode } = useColorMode();
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = openSearchBox ? 'hidden' : 'visible';
  }, [openSearchBox]);

  return (
    <>
      <Box backgroundColor={colorMode === 'dark' ? 'oGray.900' : 'oGray.50'} backdropFilter='saturate(180%) blur(10px)' position='fixed' w='100%' zIndex='200'>
        <Flex marginX='3rem' h='4rem' alignItems='center' justifyContent='space-between'>
          <Link to='/'>
            <Image src={colorMode === 'dark' ? whiteLogo : blackLogo} boxSize={9} />
          </Link>
          <SearchButton onOpenSearchBox={open => setOpenSearchBox(open)} />
          <ToggleThemeSwitch />
        </Flex>
      </Box>
      {openSearchBox && <SearchContainer onOpenSearchBox={close => setOpenSearchBox(close)} />}
    </>
  );
}

export default NavBar;
