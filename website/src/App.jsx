import * as React from "react";
import PersonCard from "./Components/PersonCard";
import NavBar from "./Components/NavBar"

const App = () => {
  return (
    <div>
      <NavBar />
      <PersonCard
        name="Anupam Khargharia"
        position="Vice President"
        imageSrc="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
        emailAddress="akhargha@trincoll.edu"
        linkedinUrl="https://www.linkedin.com/in/akhargha/"
      />
    </div>
  );
};

export default App;
