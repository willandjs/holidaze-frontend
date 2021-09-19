import React, { useContext } from "react";
import AddHotel from "../components/Dashboard/AddHotel";
import Enquiries from "../components/Dashboard/Enquiries";
import Messages from "../components/Dashboard/Messages";
import AuthContext from "../context/AuthContext";
import DashboardMenu from "../components/Dashboard/Menu/DashboardMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardHome from "../components/Dashboard/DashboardHome";


export default function Dashboard() {
  const [auth] = useContext(AuthContext);


  if(auth) {
    return (
      <div className="dashboard">
        <Router>
        <DashboardMenu />
          <Switch>
          <div className="dashboard__right">
          <Route path="/dashboard">
              <DashboardHome />
          </Route>
          <Route path="/add-hotel">
              <AddHotel />
          </Route>
          <Route path="/messages">
              <Messages />
          </Route>
          <Route path="/booking-requests">
              <Enquiries />
          </Route>
          </div>
          </Switch>
        </Router>
      </div>
    );
  }

}