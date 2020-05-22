import React from "react";
import Category from "../Category/Category";
import Jokes from "../Jokes/Jokes";
import Login from "../login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Results extends React.Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Category}></Route> 
                    <Route path="/login"  component={Login}></Route> 
                    <Route path="/jokes"  component={Jokes}></Route> 
                </Switch>
            </Router>
        )
    }

}

export default Results;
