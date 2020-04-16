import React, { useEffect } from "react";

import ReactGA from "react-ga";
// import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

import "./components/general-styles/General.css";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
// ReactGA.pageview("/");
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
  console.log("hellooooo22222?");
  ReactGA.pageview(location.pathname + location.search);
});

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Landing />
//         <ScrollUpButton ContainerClassName="scroll-up-button" />
//         <Navbar />
//         <Credits />
//       </div>
//     );
//   }
// }

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Landing />
      <ScrollUpButton ContainerClassName="scroll-up-button" />
      <Navbar />
      <Credits />
    </div>
  );
};

export default App;
