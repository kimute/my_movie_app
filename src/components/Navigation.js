import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// don'use <a href>  , it doesn't work well
// instead use Link
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
