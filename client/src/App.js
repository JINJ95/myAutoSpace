import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./pages/login";
import Members from "./pages/members";
import MaintRecord from "./pages/maintRecord";
import Maintenance from "./pages/maintenance";
import Vehicles from "./pages/vehicles";
import VehicleDisplay from "./pages/vehicleDisplay";
import NewMaintenance from "./pages/newMaintenance";
import { AuthContext } from "./utils/authContext";
import ReactNotification from "react-notifications-component";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: null,
      userId: null,
    };
  };
  login = (token, userId) => {
    this.setState({
      token: token,
      userId: userId
    })
  }
  logout = () => {
    this.setState({
      token: null,
      userId: null
    })
  }
  render() {
    return (
      <Router>
        <ReactNotification />
        <AuthContext.Provider value={{
          token: this.state.token,
          userId: this.state.userId,
          login: this.login,
          logout: this.logout
        }}>
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/MaintRecord/:id" component={MaintRecord} />
                <Route exact path="/Members" component={Members} />
                <Route exact path="/Maintenance" component={Maintenance} />
                <Route exact path="/Vehicles" component={Vehicles} />
                <Route exact path="/NewMaintenance/:id" component={NewMaintenance} />
                <Route path="/Vehicles/:id" component={VehicleDisplay} />
              </Switch>
            </header>
          </div >
        </AuthContext.Provider>
      </Router>
    );
  }
}

export default App;
