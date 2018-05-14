import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import SideBarMenu from "./components/SideBarMenu";
import MenuItem from "./components/MenuItem";
import Card from "./components/Card";
import DashBoard from "./scenes/dashboard";
import Provider from "./scenes/provider";
import Customer from "./scenes/customer";
import Stock from "./scenes/stock";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container-fluid">
            <div className="row">
              <SideBarMenu>
                <MenuItem size={20} icon="home" label="Dashboard" url="/dashboard"/>
                <MenuItem size={20} icon="truck" label="Fornecedor" url="/provider"/>
                <MenuItem size={20} icon="box" label="Estoque" url="/stock" />
                <MenuItem size={20} icon="box" label="Clientes" url="/customer"/>
              </SideBarMenu>
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
