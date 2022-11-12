import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "src/config/theme";
import NavbarHome from "src/components/Navbar/NavbarHome";
import Table from "src/components/Tables/Table.js";

export const PatientList = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavbarHome />
      <h1>Doctor Lists</h1>
      <Table />
    </ThemeProvider>
  );
};

export default PatientList;
