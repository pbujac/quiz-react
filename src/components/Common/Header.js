import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {GridList} from 'material-ui/GridList';
import './Header.css'
import Link from "react-router-dom/es/Link";

const Header = () => (
    <GridList cols={2} cellHeight={40} className="Header">
        <div className="Header-menu">
            <FlatButton containerElement={<Link to="/"/>} label="Home" primary={true}/>
            <FlatButton containerElement={<Link to="/quizzes"/>} label="Quizzes" primary={true}/>
        </div>
        <div className="Header-logout">
            <FlatButton containerElement={<Link to="/logout"/>} label="Logout" primary={true}/>
        </div>
    </GridList>
);

export default Header;