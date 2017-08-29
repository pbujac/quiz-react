import React from 'react';
import {Link} from "react-router-dom";
import GridList from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import '../../css/common/Header.css'

const Header = () => (
    <GridList cols={2} cellHeight={40} className="Header">
        <div>
            <FlatButton containerElement={<Link to="/"/>} label="Home" primary={true}/>
            <FlatButton containerElement={<Link to="/quizzes"/>} label="Quizzes" primary={true}/>
            <FlatButton containerElement={<Link to="/quiz-create"/>} label="Add quiz" primary={true}/>
        </div>
        <div className="Header-logout">
            <FlatButton label="Logout" primary={true}/>
        </div>
    </GridList>
);

export default Header;
