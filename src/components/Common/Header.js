import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {GridList} from 'material-ui/GridList';
import { Link, IndexLink } from 'react-router';
import './Header.css'

const Header = () => (
    <GridList cols={2} cellHeight={40} className="Header">
        <div className="Header-menu">
            {/*<Link to="/login">Log in</Link>*/}
            <FlatButton label="Home" primary={true}/>
            <FlatButton label="Quizzes" primary={true}/>
        </div>
        <div className="Header-logout">
            <FlatButton label="Logout" primary={true}/>
        </div>
    </GridList>
);

export default Header;