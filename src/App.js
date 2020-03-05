import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery"
import Wrapper from "./components/Wrapper";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <Contact />
    // </div>

    <Router>
      <div className="App">
      <Header />
      <Wrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cv-react-portfolio" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/resume" component = {Resume} />
      </Switch>
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
