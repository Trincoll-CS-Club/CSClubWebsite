import * as React from "react";
import PersonCard from "./Components/PersonCard";
import NavBar from "./Components/NavBar";
import people from "./Data/people.json";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";

import MembersComponent from "./Components/MembersComponent";

const App = () => {
  return (
    <div>
      <NavBar />
      <MembersComponent />
      <Typography level="h1" color="warning" style={{ textAlign: "center", paddingTop: "70px"}}>
        About Us
      </Typography>
      <Typography level="body-lg" style={{ textAlign: "center", paddingLeft: "50px", paddingRight: "50px", paddingTop: "20px" }}>
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

      <Typography level="h1" color="warning" style={{ textAlign: "center", paddingTop: "70px"}}>
        The Team
      </Typography>

      <Grid container spacing={2} sx={{ paddingLeft: "100px", paddingTop: "50px" }}>
        {" "}
        {/* Add a Grid container here */}
        {people.map((people_data, index) => (
          <Grid item xs={3} key={index}>
            {" "}
            {/* Each FixtureBox as a Grid item */}
            <PersonCard
              name={people_data.name}
              position={people_data.position}
              imageSrc={people_data.imageSrc}
              emailAddress={people_data.emailAddress}
              linkedinUrl={people_data.linkedinUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
