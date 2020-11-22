import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddZanac from "./components/AddZanac";
import Zanac from "./components/Zanac";
import ZanacoList from "./components/ZanacoList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/employees" className="navbar-brand">
         BARCLAYS BANK LIMITED
                 </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">

            <Link to={"/employees"} className="nav-link">
              List of Bankers
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/employees"]} component={ZanacoList} />
          <Route exact path="/add" component={AddZanac} />
          <Route path="/employees/:id" component={Zanac} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
