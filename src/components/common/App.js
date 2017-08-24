import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) => (
    <div className="container">
        <div className="row">
            <div className="large-12 columns">
                <MuiThemeProvider>
                    {props.children}
                </MuiThemeProvider>
            </div>
        </div>
    </div>
);

export default App;
