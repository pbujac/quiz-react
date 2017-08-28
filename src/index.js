import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import  './css/index.css';

import App from './components/App'

const root = document.querySelector('#root');
ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
            <App/>
        </Router>
    </MuiThemeProvider>,
    root
);
