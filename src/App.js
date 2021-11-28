import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Navbar from "./components/NavBarComp";
import Header from "./components/Header";

const App = () => {
  return (
    <div id="mainBody">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
