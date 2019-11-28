import React, { Component } from 'react';
import classes from './Header.module.css';
import headerPicture from '../Logo/header.jpg';
class Header extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}>
                <div className={classes.Image}>
                    <img src={headerPicture} alt="header" style={{ width: "100%", height: "300px"}} />
                    <div className={classes.centeredText}>
                    <h2>It's a board with wheels</h2><br/> 
                    <p>Then how am I supposed to ever meet anybody.</p> </div><br/>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;