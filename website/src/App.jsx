import * as React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";



const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: "20px"}}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
