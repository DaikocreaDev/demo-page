import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/About";
import Home from "./components/Home";
import Hit from "./components/Hit";
import NotHit from "./components/NotHit";
import Lottery from "./components/Lottery";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/snippets/utils/ScrollToTop";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <ScrollToTop>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/About" component={About} />
                <Route path="/Lottery" component={Lottery} />
                <Route path="/Hit" component={Hit} />
                <Route path="/NotHit" component={NotHit} />

                <Route path="/demo-page/Home/:serial?" component={Home} />
                <Route path="/demo-page/Home" component={Home} />
                <Route path="/demo-page/:serial?" component={Home} />
                <Route path="/demo-page" component={Home} />
                <Route path="/:serial?" component={Home} />
              </Switch>
              <Footer />
            </div>
          </ScrollToTop>
        </HashRouter>
      </div>
    );
  }
}

export default App;
