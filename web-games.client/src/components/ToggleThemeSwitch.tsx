import { Switch, useColorMode } from '@chakra-ui/react';

function ToggleThemeSwitch() {
  const { toggleColorMode } = useColorMode();

  return (
    <Switch
      size='lg'
      colorScheme='gray'
      onChange={toggleColorMode}
    />
  );
}

export default ToggleThemeSwitch;
