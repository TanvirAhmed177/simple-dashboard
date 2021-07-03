import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main/Main";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Main></Main>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
