import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import AboutTab from "./NavbarTabs/AboutTab";
import InvolvementTab from "./NavbarTabs/InvolvementTab";
import ProjectsTab from "./NavbarTabs/ProjectsTab";

import "./styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul id="navbar">
            <li className="tab">
              <Link to="/about-me">About Me</Link>
            </li>
            <li className="tab">
              <Link to="/involvement">Involvement</Link>
            </li>
            <li className="tab">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>

          <Redirect exact from="/" to="/about-me" />

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
      </div>
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

export default Navbar;
