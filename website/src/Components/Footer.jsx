import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Tooltip from "@mui/joy/Tooltip";
import AspectRatio from "@mui/joy/AspectRatio";

import cslogo from "../Data/Icon/Computer_Science_Logo_blue.png";
import linkedinLogo from "../Data/Icon/linkedin.png";
import instagramLogo from "../Data/Icon/instagram.png";

const Footer = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          bgcolor: "#b68af4",
          "&:hover": {
            bgcolor: "#8338ec",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2em",
            justifyContent: "center", // Centers the content horizontally
            alignItems: "center", // Centers the content vertically (if needed)
            flexDirection: "row", // Ensures the items are laid out in a row; this is the default but is good to be explicit if changing orientation is possible.
            width: "100%", // Ensures the Box takes the full width available, giving room for the centering to be noticeable.
          }}
        >
          <Tooltip title="https://www.trincoll.edu/cs/" variant="solid">
            <Button variant="plain" color="primary">
              <img
                src={cslogo}
                loading="lazy"
                alt=""
                style={{ maxHeight: "30px", width: "auto" }}
                onClick={() => (window.location.href = "https://www.trincoll.edu/cs/")}
              />
              <AspectRatio minHeight="30px" maxHeight="30px"></AspectRatio>
            </Button>
          </Tooltip>
          <Tooltip title="https://www.linkedin.com/groups/12937019/" variant="soft">
            <Button variant="plain" color="primary">
              <img
                src={linkedinLogo}
                loading="lazy"
                alt=""
                style={{ maxHeight: "30px", width: "auto" }}
                onClick={() => (window.location.href = "https://www.linkedin.com/groups/12937019/")}
              />
              <AspectRatio minHeight="30px" maxHeight="30px"></AspectRatio>
            </Button>
          </Tooltip>
          <Tooltip title="https://www.instagram.com/trincoll_cs_club/" variant="outlined">
          <Button variant="plain" color="primary">
              <img
                src={instagramLogo}
                loading="lazy"
                alt=""
                style={{ maxHeight: "30px", width: "auto" }}
                onClick={() => (window.location.href = "https://www.instagram.com/trincoll_cs_club/")}
              />
              <AspectRatio minHeight="30px" maxHeight="30px"></AspectRatio>
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default Footer;
