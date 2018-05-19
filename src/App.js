import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Card from "./components/Cards";
import DashBoard from "./scenes/dashboard";
import Provider from "./scenes/provider";
import Customer from "./scenes/customer";
import Stock from "./scenes/stock";
import SideBar from "./components/SideBar";
import MenuLink from "./components/MenuLink";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container-fluid">
            <div className="row">
              <SideBar>
                <MenuLink size={20} icon="home" label="Dashboard" url="/dashboard"/>
                <MenuLink size={20} icon="truck" label="Fornecedor" url="/provider"/>
                <MenuLink size={20} icon="box" label="Estoque" url="/stock" />
                <MenuLink size={20} icon="box" label="Clientes" url="/customer"/>
              </SideBar>
              <main role="main"  className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/customer" component={Customer} />
                <Route path="/provider" component={Provider} />
                <Route path="/stock" component={Stock} />
              </main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
