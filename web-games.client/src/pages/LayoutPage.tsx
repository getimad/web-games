import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Layout() {
  return (
    <>
      <NavBar />
      <Box paddingTop='4rem'>
        <Outlet />
      </Box>
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
