import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

function Layout() {
  return (
    <>
      <NavBar />
      <Box paddingTop='4rem'>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
