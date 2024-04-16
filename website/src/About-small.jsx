import * as React from "react";
import PersonCard from "./Components/PersonCard";
import NavBar from "./Components/NavBar";
import board from "./Data/board.json";
import product from "./Data/product_dev.json";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import Footer from "./Components/Footer";

import MembersComponent from "./Components/MembersComponent";

const About = () => {
  return (
    <div>
      <NavBar />
      <MembersComponent />
      <Typography
        level="h1"
        style={{ textAlign: "center", color: "#ff006e", paddingTop: "70px", fontSize: "4rem" }}
      >
        About Us
      </Typography>
      <Typography
        level="body-lg"
        style={{
          textAlign: "center",
          paddingLeft: "200px",
          paddingRight: "200px",
          paddingTop: "20px",
          fontSize: "1.5rem",
        }}
      >
        Welcome to the <span style={{ backgroundColor: "#8338ec", color: "white"}}> Trinity College CS Club!</span> Since our start in 2023, we've
        grown into a cozy community of tech enthusiasts and innovators. Whether
        you're just starting or you've been coding for years, there's a spot for
        you here. Dive into a world of coding, collaboration, and creativity
        with us!
      </Typography>

      <Typography
        level="h1"
        style={{ textAlign: "center", paddingTop: "70px", fontSize: "3.5rem", color: "#ff006e" }}
      >
        Board Members
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ paddingLeft: "140px", paddingTop: "50px" }}
      >
        {" "}
        {/* Add a Grid container here */}
        {board.map((board_data, index) => (
          <Grid item xs={3} key={index}>
            {" "}
            <PersonCard
              name={board_data.name}
              position={board_data.position}
              imageSrc={board_data.imageSrc}
              emailAddress={board_data.emailAddress}
              linkedinUrl={board_data.linkedinUrl}
            />
          </Grid>
        ))}
      </Grid>

      <Typography
        level="h1"
        style={{ textAlign: "center", paddingTop: "70px", fontSize: "3.5rem", color: "#ff006e" }}
      >
        Product Developers
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ paddingLeft: "140px", paddingTop: "50px" }}
      >
        {" "}
        {/* Add a Grid container here */}
        {product.map((product_data, index) => (
          <Grid item xs={3} key={index}>
            {" "}
            <PersonCard
              name={product_data.name}
              position={product_data.position}
              imageSrc={product_data.imageSrc}
              emailAddress={product_data.emailAddress}
              linkedinUrl={product_data.linkedinUrl}
            />
          </Grid>
        ))}
      </Grid>

      <div style={{ paddingTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
