import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/About";
import Home from "./components/Home";
import Hit from "./components/Hit";
import NotHit from "./components/NotHit";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/demo-page" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/demo-page/About" component={About} />
            <Route path="/About" component={About} />
            <Route path="/demo-page/Hit" component={Hit} />
            <Route path="/Hit" component={Hit} />
            <Route path="/demo-page/NotHit" component={NotHit} />
            <Route path="/NotHit" component={NotHit} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
