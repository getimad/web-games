import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Image, useColorMode } from '@chakra-ui/react';
import ToggleThemeSwitch from './ToggleThemeSwitch';
import SearchButton from './SearchButton';
import SearchContainer from './SearchContainer';
import useSearchStore from '../useSearchStore';
import whiteLogo from '../assets/logo-white.svg';
import blackLogo from '../assets/logo-black.svg';
import useGameQueryStore from '../store';

function NavBar() {
  const { colorMode } = useColorMode();
  const showSearchBox = useSearchStore(s => s.showSearchBox);
  const setInitgameQuery = useGameQueryStore(s => s.setInitgameQuery);

  const goToHomePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setInitgameQuery();
  }

  useEffect(() => {
    document.body.style.overflow = showSearchBox ? 'hidden' : 'visible';
  }, [showSearchBox]);

  return (
    <>
      <Box backgroundColor={colorMode === 'dark' ? 'oGray.900' : 'oGray.50'} backdropFilter='saturate(180%) blur(10px)' position='fixed' w='100%' zIndex='200'>
        <Flex marginX='3rem' h='4rem' alignItems='center' justifyContent='space-between'>
          <Link to='/'>
            <Image src={colorMode === 'dark' ? whiteLogo : blackLogo} boxSize={9} onClick={goToHomePage} />
          </Link>
          <SearchButton />
          <ToggleThemeSwitch />
        </Flex>
      </Box >
      {showSearchBox && <SearchContainer />
      }
    </>
  );
}

export default NavBar;
