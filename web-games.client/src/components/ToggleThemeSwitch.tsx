import { Switch, useColorMode } from '@chakra-ui/react';

function ToggleThemeSwitch() {
  const { toggleColorMode } = useColorMode();

  return (
    <Switch
      size='lg'
      onChange={toggleColorMode}
    />
  );
}

export default ToggleThemeSwitch;
