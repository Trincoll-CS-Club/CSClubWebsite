import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Tooltip from "@mui/joy/Tooltip";
import AspectRatio from "@mui/joy/AspectRatio";

import cslogo from "../Data/Icon/BlackTrinCS.png";
import linkedinLogo from "../Data/Icon/backLinkedin.png";
import instagramLogo from "../Data/Icon/blackInstagram.png";

const Footer = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          bgcolor: "#FFECD1",
          "&:hover": {
            bgcolor: "#FFECD1",
          },
          width: "100%",
          marginTop: 'auto',
          marginBottom: '0px',
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2em",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            marginTop: "auto",
          }}
        >
          <Tooltip title="https://www.trincoll.edu/cs/" variant="solid">
            <Button variant="plain" color="primary">
              <img
                src={cslogo}
                loading="lazy"
                alt=""
                style={{ maxHeight: "30px", width: "auto" }}
                onClick={() =>
                  (window.location.href = "https://www.trincoll.edu/cs/")
                }
              />
              <AspectRatio minHeight="30px" maxHeight="30px"></AspectRatio>
            </Button>
          </Tooltip>
          <Tooltip
            title="https://www.linkedin.com/groups/12937019/"
            variant="soft"
          >
            <Button variant="plain" color="primary">
              <img
                src={linkedinLogo}
                loading="lazy"
                alt=""
                style={{ maxHeight: "30px", width: "auto" }}
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/groups/12937019/")
                }
              />
              <AspectRatio minHeight="30px" maxHeight="30px"></AspectRatio>
            </Button>
          </Tooltip>
          <Tooltip
            title="https://www.instagram.com/trincoll_cs_club/"
            variant="outlined"
          >
            <Button variant="plain" color="primary">
              <img
                src={instagramLogo}
                loading="lazy"
                alt=""
                style={{ maxHeight: "30px", width: "auto" }}
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/trincoll_cs_club/")
                }
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