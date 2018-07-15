import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import DashBoard from "./scenes/Adm/scenes/Dashboard";
import Provider from "./scenes/Adm/scenes/Provider";
import Customer from "./scenes/Adm/scenes/Customer";
import Stock from "./scenes/Adm/scenes/Stock";
import SideBar from "./components/SideBar";
import MenuLink from "./components/MenuLink";
import NavBar from "./components/NavBar";

class App extends React.Component {

  componentWillMount(){
    document.getElementById('body').className='color'
  }
  
  render() {
    return (
      <Router>
        <div >
          <NavBar />
          <div className="container-fluid">
            <div className="row">
              <SideBar>
                <MenuLink size={20} icon="home" label="Dashboard" url="/dashboard" />
                <MenuLink size={20} icon="truck" label="Fornecedor" url="/provider" />
                <MenuLink size={20} icon="box" label="Estoque" url="/stock" />
                <MenuLink size={20} icon="box" label="Clientes" url="/customer" />
              </SideBar>
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
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
