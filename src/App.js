import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBarMenu from "./components/SideBarMenu";
import MenuItem from "./components/MenuItem";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBarMenu>
              <MenuItem name="dash" />
              <MenuItem name="dash3" />
            </SideBarMenu>
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
            >
              <div className="row">
                <Card className="card-1"/>
                <Card className="card-1"/>
                <Card className="card-1"/>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
