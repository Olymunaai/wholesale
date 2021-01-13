import './App.css';
import Cards from "./components/cards/Cards"
import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Footer from "./components/footer/Footer"
import Item from "./components/item/Item"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
          <Switch>

            <Route path="/contact"></Route>
            <Route exact path="/item/:entry">
              <Item />
            </Route>
            <Route path="/">
              <Intro />
              <Cards />
            </Route>
          </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
