import React from 'react';
import {MuiThemeProvider} from "material-ui/styles/index";
import Header from "./Common/Header";
import './App.css';

const App = () => (
    <div className="App">
        <MuiThemeProvider>
            <Header />
        </MuiThemeProvider>
    </div>
);

export default App ;