import React from 'react';
import {MuiThemeProvider} from "material-ui/styles/index";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Routes from './routes.js';
import './App.css';

const App = () => (
    <div className="App">
        <MuiThemeProvider>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Routes/>
                    <Footer/>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    </div>
);

export default App;