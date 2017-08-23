import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {GridList} from 'material-ui/GridList';
import './Header.css'
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';


const iconStyles = {
    marginRight: 24,
};

const Header = () => (
    <GridList cols={2} cellHeight={40} className="Header">
        <div className="Header-menu">
            {/*<FontIcon*/}
            {/*className="muidocs-icon-action-home"*/}
            {/*style={iconStyles}*/}
            {/*color={red500}*/}
            {/*hoverColor={greenA200}*/}
            {/*/>*/}
            <FlatButton label="Home" primary={true}/>
            <FlatButton label="Quizzes" primary={true}/>
        </div>
        <div className="Header-logout">
            <FlatButton label="Logout" primary={true}/>
        </div>
    </GridList>
);

export default Header;