import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import ToggleThemeSwitch from "./ToggleThemeSwitch";
import SearchButton from "./SearchButton";
import SearchContainer from "./SearchContainer";
import useSearchStore from "../useSearchStore";
import whiteLogo from "../assets/white-logo.svg";
import blackLogo from "../assets/black-logo.svg";
import useGameQueryStore from "../store";

function NavBar() {
  const { colorMode } = useColorMode();
  const showSearchBox = useSearchStore((s) => s.showSearchBox);
  const setInitgameQuery = useGameQueryStore((s) => s.setInitgameQuery);

  const goToHomePage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setInitgameQuery();
  };

  useEffect(() => {
    document.body.style.overflow = showSearchBox ? "hidden" : "visible";
  }, [showSearchBox]);

  return (
    <>
      <Box
        backgroundColor={colorMode === "dark" ? "oGray.900" : "oGray.50"}
        backdropFilter="saturate(180%) blur(10px)"
        position="fixed"
        w="100%"
        zIndex="200"
      >
        <Flex
          marginX="3rem"
          h="4rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/">
            <Flex alignItems="center" gap="2">
              <Image
                src={colorMode === "dark" ? whiteLogo : blackLogo}
                onClick={goToHomePage}
                height={12}
              />
            </Flex>
          </Link>
          <SearchButton />
          <ToggleThemeSwitch />
        </Flex>
      </Box>
      {showSearchBox && <SearchContainer />}
    </>
  );
}

export default NavBar;
