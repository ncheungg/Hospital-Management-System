import { ThemeProvider } from "@mui/material";
import React from "react";
import NavbarHome from "src/components/Navbar/NavbarHome";
import theme from "src/config/theme";
import Landing from "src/components/Landing/Landing";

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavbarHome />
      <Landing />
    </ThemeProvider>
  );
};

export default Home;
