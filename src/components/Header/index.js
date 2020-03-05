import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function Header() {
    return(
        <div>
        <Link to="/home">Home</Link>|
        <Link to="/contact">Contact</Link>|
        <Link to="/gallery">Gallery</Link>
        </div>
    )
}

export default Header;