import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  // Link,
  // Redirect,
  // useLocation,
} from "react-router-dom";

import AboutTab from "./NavbarTabs/AboutTab";
import InvolvementTab from "./NavbarTabs/InvolvementTab";
import ProjectsTab from "./NavbarTabs/ProjectsTab";
import ExperienceTab from "./NavbarTabs/ExperienceTab";
import CourseworkTab from "./NavbarTabs/CourseworkTab";
import ContactTab from "./NavbarTabs/ContactTab";

import "./general-styles/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    // this.state = { pathname: "/" };
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <div id="navbar">
          <NavLink className="link-tab" to="/about-me">
            About Me
          </NavLink>
          <NavLink className="link-tab" to="/involvement">
            Involvement
          </NavLink>
          <NavLink className="link-tab" to="/projects">
            Projects
          </NavLink>
          <NavLink className="link-tab" to="/experience">
            Work Experience
          </NavLink>
          <NavLink className="link-tab" to="/coursework">
            Coursework
          </NavLink>
          <NavLink className="link-tab" to="/contact">
            Contact Me
          </NavLink>
        </div>

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
