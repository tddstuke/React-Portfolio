import React from "react";
import About from "./components/About";
import Porfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Porfolio></Porfolio>
      <Footer></Footer>
    </div>
  );
}
export default App;
