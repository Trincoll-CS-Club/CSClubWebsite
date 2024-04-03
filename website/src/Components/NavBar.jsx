import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

const NavBar = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          bgcolor: "warning.100",
          "&:hover": {
            bgcolor: "warning.200",
          },
        }}
      >
        <Typography level="h5" component="div">
          Trinity College CS Club Logo
        </Typography>

        <Box sx={{ display: "flex", gap: "2em" }}>
          <Button variant="solid" color="warning" onClick={() => (window.location.href = "/index.html")}>About Us</Button>
          <Button variant="solid" color="warning" onClick={() => (window.location.href = "/explore.html")}>Explore</Button>
          <Button variant="solid" color="warning" onClick={() => (window.location.href = "/")}>Join Now</Button>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default NavBar;
