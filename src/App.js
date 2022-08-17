import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Services from "./pages/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>WElcome to </p>
        <h1>HSPL Home Page</h1>
      </section>
    </>
  );
};



const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Services />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
