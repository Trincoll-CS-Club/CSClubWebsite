import React from 'react';
import NavBar from './Components/NavBar';
import Typography from '@mui/joy/Typography';
import Footer from './Components/Footer';
import MembersComponent from './Components/MembersComponent';

const About = () => {
  return (
    <div>
      <NavBar />
      <Typography
        level="h1"
        style={{ textAlign: "center", color: "#195468", paddingTop: "70px", fontSize: "4rem" }}
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
        Welcome to the <span style={{ backgroundColor: "#F09C50", color: "white"}}>Trinity College CS Club!</span> Since our start in 2023, we've
        grown into a cozy community of tech enthusiasts and innovators. Whether
        you're just starting or you've been coding for years, there's a spot for
        you here. Dive into a world of coding, collaboration, and creativity
        with us!
      </Typography>
      
      <Typography
        level="h1"
        style={{ textAlign: "center", paddingTop: "70px", fontSize: "3.5rem", color: "#195468" }}
      >
        Board Members
      </Typography>
      <MembersComponent />

      <div style={{ paddingTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
