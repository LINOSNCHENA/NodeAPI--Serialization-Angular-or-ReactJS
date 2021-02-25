import "./App.css";
import React from "react";
import { BrowserRouter as Router,Switch,Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ZanacoList from "./components/ZanacoList";
import AddZanac from "./components/AddZanaco";
import Zanac from "./components/Zanaco";


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/employees" className="navbar-brand">
            MEXICO BANK Ltd
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/employees"} className="nav-link">
                List of Bankers
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Mexico
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
    </Router>
  );
}

export default App;
