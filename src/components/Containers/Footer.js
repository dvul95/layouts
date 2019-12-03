import React, { Component } from 'react';
import classes from './Footer.module.css';
import footerPicture from '../Logo/footer.jpg';
class Footer extends Component {
    render() {
        return (
            <div className={classes.footer}>
                <div className={classes.Footercontainer}>
                    <div className={classes.Footertext}>
                        <h2>LOOK AT THE TIME</h2>
                        <p>This is it. This is the answer. It says here that a bolt of lightning is gonna strike the clock tower precisely at 10:04 p.m. next Saturday night. If we could somehow harness this bolt of lightning, channel it into the flux capacitor, it just might work. sJust say anything, George, say what ever's natural, the first thing that comes to your mind.</p>
                    </div>
                    <div className={classes.FooterLogo}>
                        {/*<h3>Footer_Logo</h3>*/}
                        <img src={footerPicture} alt="footer" style={{ width: "280px", height: "270px", marginTop:"5px", padding:"1px 1px 2px 3px" }} />
                        <div className={classes.Hashtag}>
                            <p style={{ fontSize: "48px"}}>#RANDOM</p>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default Footer;