import React, { Component } from "react";

import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import AboutTab from "./NavbarTabs/AboutTab";
import InvolvementTab from "./NavbarTabs/InvolvementTab";
import ProjectsTab from "./NavbarTabs/ProjectsTab";
import ExperienceTab from "./NavbarTabs/ExperienceTab";
import CourseworkTab from "./NavbarTabs/CourseworkTab";
import ContactTab from "./NavbarTabs/ContactTab";

import "./general-styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div id="navbar">
          <Link to="landing-bottom" smooth={true} duration={500}>
            <NavLink className="link-tab" to="/about-me">
              About Me
            </NavLink>
          </Link>
          <Link to="landing-bottom" smooth={true} duration={500}>
            <NavLink className="link-tab" to="/involvement">
              Involvement
            </NavLink>
          </Link>
          <Link to="landing-bottom" smooth={true} duration={500}>
            <NavLink className="link-tab" to="/projects">
              Projects
            </NavLink>
          </Link>
          <Link to="landing-bottom" smooth={true} duration={500}>
            <NavLink className="link-tab" to="/experience">
              Work Experience
            </NavLink>
          </Link>
          <Link to="landing-bottom" smooth={true} duration={500}>
            <NavLink className="link-tab" to="/coursework">
              Coursework
            </NavLink>
            <NavLink className="link-tab" to="/contact">
              Contact Me
            </NavLink>
          </Link>
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
  }
}

export default Navbar;
