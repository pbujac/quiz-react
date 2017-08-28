import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Route, Router} from "react-router";
import Home from "../Home";

const App = (props) => (

    <Router>
        <div className="container">
            <div className="row">
                <div className="large-12 columns">
                    <MuiThemeProvider>
                        <Route exact path="/" component={Home}/>
                    </MuiThemeProvider>
                </div>
            </div>
        </div>
    </Router>
);

export default App;
