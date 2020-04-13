import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  // Redirect,
  // useLocation,
} from "react-router-dom";

import AboutTab from "./NavbarTabs/AboutTab";
import InvolvementTab from "./NavbarTabs/InvolvementTab";
import ProjectsTab from "./NavbarTabs/ProjectsTab";
import ExperienceTab from "./NavbarTabs/ExperienceTab";
import CourseworkTab from "./NavbarTabs/CourseworkTab";
import ContactTab from "./NavbarTabs/ContactTab";

import "./styles/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { pathname: "/about-me" };
  }

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
            <li className="tab">
              <Link to="/experience">Work Experience</Link>
            </li>
            <li className="tab">
              <Link to="/coursework">Coursework</Link>
            </li>
            <li className="tab">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Redirect to="/about-me" />
            </Route>
            <Route path="/about-me">
              <About />
            </Route>
            <Route path="/involvement">
              <Involvement />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/coursework">
              <Coursework />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );

    function About() {
      return <AboutTab />;
      // return GetPathname(); // testing how to get current path name
    }

    function Involvement() {
      return <InvolvementTab />;
    }

    function Projects() {
      return <ProjectsTab />;
    }

    function Experience() {
      return <ExperienceTab />;
    }

    function Coursework() {
      return <CourseworkTab />;
    }

    function Contact() {
      return <ContactTab />;
    }

    // function GetPathname() {
    //   let location = useLocation();
    //   // console.log(location.pathname);
    //   return <h1>{location.pathname}</h1>;
    // }
  }
}

export default Navbar;
