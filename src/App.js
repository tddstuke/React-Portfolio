import React, { useState } from "react";
import About from "./components/About";
import Porfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [navChoices] = useState([
    { name: "About me" },
    { name: "Portfolio" },
    { name: "Resume" },
    { name: "Contact" },
  ]);
  const [currentChoice, setCurrentChoice] = useState(navChoices[0]);
  return (
    <div>
      <Header
        navChoices={navChoices}
        setCurrentChoice={setCurrentChoice}
        currentChoice={currentChoice}
      ></Header>
      <main>
        <>
          {currentChoice.name === "About me" && <About></About>}
          {currentChoice.name === "Portfolio" && <Porfolio></Porfolio>}
          {currentChoice.name === "Contact" && <ContactForm></ContactForm>}
          {currentChoice.name === "Resume" && <Resume></Resume>}
        </>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default App;
