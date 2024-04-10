import * as React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Typography from "@mui/joy/Typography";
import InfoCard from "./Components/InfoCard";

const App = () => {
  return (
    <div>
      <NavBar />
      <Typography
        level="h1"
        style={{
          textAlign: "center",
          color: "#ff006e",
          paddingTop: "70px",
          fontSize: "4rem",
        }}
      >
        Engagement through
      </Typography>
      <Typography level="h1" style={{ textAlign: "center", color: "#ff006e", fontSize: "4rem" }}>
        <span
          style={{
            backgroundColor: "#8338ec",
            color: "white",
            paddingRight: "20px",
            paddingLeft: "20px",
            paddingBottom: "8px",
          }}
        >
          {" "}
          technology{" "}
        </span>
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "80px" }}>
        <InfoCard
          header="40+ Active Members"
          description="Innovative participants contributing to Trinity and the Hartford Community"
        />
        <InfoCard
          header="100+ Projects"
          description="Innovative participants contributing to Trinity and the Hartford Community "
        />
        <InfoCard
          header="20+ Events"
          description="Innovative participants contributing to Trinity and the Hartford Community "
        />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;