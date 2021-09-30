import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/About";
import Home from "./components/Home";
import Hit from "./components/Hit";
import NotHit from "./components/NotHit";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/snippets/utils/ScrollToTop";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <div>
              <Header />
              <Switch>
                <Route path="/demo-page/About" component={About} />
                <Route path="/About" component={About} />
                <Route path="/demo-page/Hit" component={Hit} />
                <Route path="/Hit" component={Hit} />
                <Route path="/demo-page/NotHit" component={NotHit} />
                <Route path="/NotHit" component={NotHit} />
                <Route exact path="/" component={Home} />
                <Route path="/demo-page/:serial" component={Home} />
                <Route path="/:serial" component={Home} />
              </Switch>
              <Footer />
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
