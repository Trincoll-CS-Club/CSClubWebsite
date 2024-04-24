import * as React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Typography from "@mui/joy/Typography";
import InfoCard from "./Components/InfoCard";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Video from "./Data/video.mp4";

const App = () => {
  const logos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9oGgZv7LE6rFa5E4AXIhnbf73azRQHdWKJy-OX-J3g&s",
      text: "Microsoft",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
      text: "Amazon",
    },
    {
      src: "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",
      text: "Apple",
    },
    {
      src: "https://media.licdn.com/dms/image/C4E0BAQHFT4-xwNyHJQ/company-logo_200_200/0/1676311178235/hybridpathways_logo?e=2147483647&v=beta&t=RbHfv7aB9egdZ6t9rbcyodHWQy52laUTW9bxZ7T6biM",
      text: "Hybrid Pathways",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DjPUmWtiyjy-o7Ehg35Xq2ScqU7vhJYk9F_61Js4Gg&s",
      text: "General Motors",
    },
  ];

  return (
    <div style={{ position: "relative", paddingBottom: "100px" }}>
      <NavBar />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <video autoPlay loop muted style={{ width: '100%', height: 'auto', objectFit: 'cover' }}>
          <source src={Video} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
          <Typography
            level="h1"
            style={{
              color: "#fff",
              fontSize: "4rem",
            }}
          >
            Engagement through
          </Typography>
          <Typography
            level="h1"
            style={{ color: "#ff006e", fontSize: "4rem" }}
          >
            <span
              style={{
                backgroundColor: "#F09C50",
                color: "black",
                paddingRight: "20px",
                paddingLeft: "20px",
                paddingBottom: "8px",
              }}
            >
              technology
            </span>
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "80px",
          zIndex: 2,
        }}
      >
        <InfoCard
          header="40+ Active Members"
          description="Innovative participants contributing to Trinity and the Hartford Community"
        />
        <InfoCard
          header="100+ Projects"
          description="Innovative participants contributing to Trinity and the Hartford Community"
        />
        <InfoCard
          header="20+ Events"
          description="Innovative participants contributing to Trinity and the Hartford Community"
        />
      </div>
      <div style={{ textAlign: "center", paddingTop: "80px", color: "#195468", zIndex: 2 }}>
        <h1>Where bantams work</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", zIndex: 2 }}>
        <Card
          variant="soft"
          sx={{
            padding: 2,
            backgroundColor: "white",
            border: "5px solid #195468",
            maxWidth: "1000px",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {logos.map((logo, index) => (
              <Box key={index} sx={{ textAlign: "center", padding: "20px" }}>
                <img
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  style={{ width: 60, height: 60 }}
                />
                <Typography level="body2">{logo.text}</Typography>
              </Box>
            ))}
          </Stack>
        </Card>
      </div>
      <div style={{ paddingTop: "20px", zIndex: 2 }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;