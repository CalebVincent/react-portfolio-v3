import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id="hero-text">
            <h1>Caleb Vincent</h1>
            <p>And I'm a Web Developer</p>
            <Link className="btn btn-primary" to="/contact">Contact Me  </Link> | 
            <Link className="btn btn-secondary" to="/gallery"> View Previous Work</Link> | 
            <Link to="/resume"> Resume</Link>
        </div>
    )
}

export default Home;
