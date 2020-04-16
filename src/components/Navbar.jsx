import React, { Component } from "react";

import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  // Router,
  // withRouter,
} from "react-router-dom";

import { Link } from "react-scroll";

import AboutTab from "./NavbarTabs/AboutTab";
import InvolvementTab from "./NavbarTabs/InvolvementTab";
import ProjectsTab from "./NavbarTabs/ProjectsTab";
import ExperienceTab from "./NavbarTabs/ExperienceTab";
import CourseworkTab from "./NavbarTabs/CourseworkTab";
import ContactTab from "./NavbarTabs/ContactTab";

import AboutMeIcon from "../assets/images/icons/about-me.svg";
import InvolvementIcon from "../assets/images/icons/involvement.svg";
import ProjectsIcon from "../assets/images/icons/projects.svg";
import ExperienceIcon from "../assets/images/icons/work.svg";
import CourseworkIcon from "../assets/images/icons/coursework.svg";
import ContactIcon from "../assets/images/icons/contact.svg";

import "./general-styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div id="navbar">
          <Link to="landing-bottom" smooth={true} duration={500}>
            <NavLink className="link-tab" to="/about-me">
              <img src={AboutMeIcon} alt="Me" className="color-svg-white" />{" "}
              About Me
            </NavLink>
            {/* </Link> */}
            {/* <Link
            componentclass={NavLink}  
            to="landing-bottom"
            smooth={true}
            duration={500}
          >
            About Me
          </Link> */}

            <NavLink className="link-tab" to="/involvement">
              <img src={InvolvementIcon} alt="Rutgers" /> Involvement
            </NavLink>

            <NavLink className="link-tab" to="/projects">
              <img
                src={ProjectsIcon}
                alt="Projects"
                className="color-svg-white"
              />{" "}
              Projects
            </NavLink>

            <NavLink className="link-tab" to="/experience">
              <img
                src={ExperienceIcon}
                alt="Experience"
                className="color-svg-white"
              />{" "}
              Work Experience
            </NavLink>

            <NavLink className="link-tab" to="/coursework">
              <img
                src={CourseworkIcon}
                alt="Coursework"
                className="color-svg-white"
              />{" "}
              Coursework
            </NavLink>

            <NavLink className="link-tab" to="/contact">
              <img
                src={ContactIcon}
                alt="Contact"
                className="color-svg-white"
              />{" "}
              Contact Me
            </NavLink>
          </Link>
        </div>

        <Switch>
          <Route exact path="/">
            <AboutTab />
          </Route>
          <Route path="/about-me">
            <AboutTab />
          </Route>
          <Route path="/involvement">
            <InvolvementTab />
          </Route>
          <Route path="/projects">
            <ProjectsTab />
          </Route>
          <Route path="/experience">
            <ExperienceTab />
          </Route>
          <Route path="/coursework">
            <CourseworkTab />
          </Route>
          <Route path="/contact">
            <ContactTab />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navbar;
