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
          bgcolor: "#001524",
          "&:hover": {
            bgcolor: "#001524",
          },
        }}
      >
        <img
          src="https://i.ibb.co/98Y8xzY/logo1.png"
          style={{ maxHeight: "90px", maxWidth: "90px", cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
        />
        <Box sx={{ display: "flex", gap: "2em" }}>
          <Button
            variant="solid"
            sx={{
              bgcolor: "#FF7D00",
              "&:hover": {
                bgcolor: "#78290F",
              },
              color: "white"
            }}
            onClick={() => (window.location.href = "/about.html")}
          >
            About Us
          </Button>
          <Button
            variant="solid"
            sx={{
              bgcolor: "#FF7D00",
              "&:hover": {
                bgcolor: "#78290F",
              },
              color: "white"
            }}
            onClick={() => (window.location.href = "/explore.html")}
          >
            Explore
          </Button>
          <Button
            variant="solid"
            sx={{
              bgcolor: "#FF7D00",
              "&:hover": {
                bgcolor: "#78290F",
              },
              color: "white"
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