import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import AboutTab from "./NavbarTabs/AboutTab";
import InvolvementTab from "./NavbarTabs/InvolvementTab";
import ProjectsTab from "./NavbarTabs/ProjectsTab";

import "./styles/Navbar.css";

class MyNavbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul id="navbar">
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/involvement">Involvement</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about-me">
            <About />
          </Route>
          <Route path="/involvement">
            <Involvement />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

function About() {
  // return <AboutTab />;
  return <h1>ABOUT MEEEE</h1>;
}

function Involvement() {
  // return <InvolvementTab />;
  return <h1>INVOLVEMENT</h1>;
}

function Projects() {
  // return <ProjectsTab />;
  return <h1>PROJECTS</h1>;
}

export default MyNavbar;
