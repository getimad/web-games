import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#F9F9F9',
      100: '#EDEDED',
      200: '#D3D3D3',
      300: '#B3B3B3',
      400: '#A0A0A0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111111'
    },

    oGray: {
      50: '#F9F9F9CC',
      100: '#EDEDEDCC',
      200: '#D3D3D3CC',
      300: '#B3B3B3CC',
      400: '#A0A0A0CC',
      500: '#898989CC',
      600: '#6c6c6cCC',
      700: '#202020CC',
      800: '#121212CC',
      900: '#111111CC'
    }
  }
});

export default theme;
