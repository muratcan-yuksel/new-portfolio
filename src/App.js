import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Navbar from "./components/NavBarComp";

const App = () => {
  return (
    <div id="mainBody">
      <Navbar />
      <Button variant="success">Success</Button>{" "}
    </div>
  );
};

export default App;
