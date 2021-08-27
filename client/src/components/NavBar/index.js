import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link, BrowserRouter } from "react-router-dom";

import "./style.css";

export default function NavBar() {
  return (

      <nav className="nav nav-pills flex-column flex-sm-row">
        <Link
          to="/login"
          id="nav-links"
          className={
            window.location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
          aria-current="page"
        >
          Sign in 
        </Link>
        <Link
          to="/signup"
          id="nav-links"
          className={
            window.location.pathname === "/signup"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Sign up 
        </Link>
      </nav>
    );
      
      
}
