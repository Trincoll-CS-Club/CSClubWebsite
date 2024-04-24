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
          bgcolor: "#43A4AD",
          "&:hover": {
            bgcolor: "#195468",
          },
        }}
      >
        <img
          src="https://i.ibb.co/X4cPJdm/logo-2.png"
          style={{ maxHeight: "90px", maxWidth: "90px", cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
        />
        <Box sx={{ display: "flex", gap: "2em" }}>
          <Button
            variant="solid"
            sx={{
              bgcolor: "#FCF5D9",
              "&:hover": {
                bgcolor: "#F09C50",
              },
              color: "black"
            }}
            onClick={() => (window.location.href = "/about.html")}
          >
            About Us
          </Button>
          <Button
            variant="solid"
            sx={{
              bgcolor: "#FCF5D9",
              "&:hover": {
                bgcolor: "#F09C50",
              },
              color: "black"
            }}
            onClick={() => (window.location.href = "/explore.html")}
          >
            Explore
          </Button>
          <Button
            variant="solid"
            sx={{
              bgcolor: "#FCF5D9",
              "&:hover": {
                bgcolor: "#F09C50",
              },
              color: "black"
            }}
            onClick={() => (window.location.href = "https://forms.gle/1khC8AiXXPhizdEDA")}
          >
            Join Now
          </Button>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default NavBar;