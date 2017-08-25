import React from 'react';
import {MuiThemeProvider} from "material-ui/styles/index";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import routes from './routes.js';

import './App.css';
import Home from "./Home";

const App = (props) => (
    <div className="App">
        <MuiThemeProvider>
            <div>
                <Header/>
                <BrowserRouter>
                    {/*{props.children()}*/}
                    <Route routes={routes}/>
                    {/*<Route path="/home" component={Home}/>*/}
                </BrowserRouter>
                <Footer/>
            </div>
        </MuiThemeProvider>
    </div>
);

export default App;