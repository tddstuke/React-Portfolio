import React, { useState } from "react";
import About from "./components/About";
import Porfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [navChoices] = useState([
    { name: "About me" },
    { name: "Portfolio" },
    { name: "Resume" },
  ]);
  const [currentChoice, setCurrentChoice] = useState(navChoices[0]);
  return (
    <div>
      <Nav
        navChoices={navChoices}
        setCurrentChoice={setCurrentChoice}
        currentChoice={currentChoice}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            {currentChoice.name === "About me" && <About></About>}
            {currentChoice.name === "Portfolio" && <Porfolio></Porfolio>}
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}
export default App;
