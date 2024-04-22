import * as React from "react";
import NavBar from "./Components/NavBar";

import Typography from "@mui/joy/Typography";
import Footer from "./Components/Footer";


const Explore = () => {
  return (
    <div>
      <NavBar />
      <Typography
        level="h1"
        color="warning"
        style={{ textAlign: "center", paddingTop: "70px", fontSize: "4rem" }}
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
          fontSize: "1.5rem"
        }}
      >
        Welcome to the Trinity College Computer Science Club! We are a
        passionate community of students dedicated to exploring the vast and
        evolving field of computer science. Our club is the hub for innovation,
        learning, and collaboration at Trinity College, where students from
        diverse backgrounds come together to share ideas, tackle challenging
        projects, and develop new technologies. Whether you're a seasoned coder,
        a tech enthusiast, or someone curious about the digital world, our club
        offers a range of activities, workshops, and events designed to enrich
        your understanding of computer science and its applications. From coding
        marathons and hackathons to guest lectures from leading industry
        experts, we provide a supportive and engaging environment for all
        members to thrive. Join us and be part of a community that shapes the
        future of technology!
      </Typography>
      <div style={{ paddingTop: "20px"}}>
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
