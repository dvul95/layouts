import React from 'react';
import Header from './components/Containers/Header';
import Footer from './components/Containers/Footer';
import step_1 from './components/Logo/step-1.jpg';
import step_2 from './components/Logo/step-2.jpg';
import step_3_4 from './components/Logo/step-3-4.jpg';
import './App.css';
import classes from './App.css';

function App() {
  return (
    <div className="App">
      {/* Calling component 'Header' in the main method */}
      <Header />
     <div className="paragraph"><p>Lorem ipsum here. Lorem ipsum here. This is a text paragraph.This is a text paragraph lorem ipsum paragraph lorem ipsum.</p><br/></div> 
      {/* GRID LAYOUT HERE */}
      <div className="gridlay">
      <div className="grid-items">
      <div className="item" style={{backgroundColor:"#99ccff" , color:"white", width:"180px", height:"256px" , padding:"15px 0 15px 15px"}}><h1 style={{fontSize:"76px"}}>1</h1></div>
      <div className="item"><h2>I WILL</h2><br/><p>This is more serious than I thought. Apparently your mother is amorously infatuated with you instead of your father. What about George? Look, I'm just not ready to ask Lorraine out to the dance, and not you, nor anybody else on this planet is gonna make me change my mind. Well gee, I don't know. I hope you don't mind but George asked if he could take me home.</p></div>
      <div className="item"><img src={step_1} alt= "logo1" style={{width:"180px", height:"256px"}}/> </div>
      {/* SECOND ROW */}
      <div className="item"> <img src={step_2} alt= "logo2" style={{width:"180px", height:"256px"}} /></div>
      <div className="item" style={{backgroundColor:"#99ccff" , color:"white",width:"180px", height:"256px"}}><h1 style={{fontSize:"76px"}}>2</h1></div>
      <div className="item"><h2>RIGHT</h2><br/><p>My god, do you know what this means? It means that this damn thing doesn't work at all. Ah. Whoa. Okay. Damn, where is that kid. Damn. Damn damn. You're late, do you have no concept of time? Hey wait, wait a minute, who are you? Stella, another one of these damn kids jumped in front of my car. Come on out here, help me take him in the house.</p></div>
      {/* THIRD AND FOURTH ROW */}
      <div className="item" style={{backgroundColor:"#99ccff" , color:"white", width:"180px", height:"256px"}}><h1 style={{fontSize:"76px"}}>3</h1></div>
      <div className="item"><h2>MARTY, ONE REJECTION ISNT THE END OF THE WORLD.</h2><br/><p>Without any sugar. Hey, George, buddy, you weren't at school, what have you been doing all day? Back to the future. 1955? You're my ma- you're my ma. Don't worry, I'll take care of the lightning, you take care of your pop. By the way, what happened today, did he ask her out?</p></div>
      <div className="item"></div>
      <div className="item"><h2>WELL, MARTY, I WANT TO THANK YOU </h2><br/><p>What? Marty, one rejection isn't the end of the world. Time machine, I haven't invented any time machine. She's just trying to keep you respectable. Yes, yes, I'm George, George McFly, and I'm your density. I mean, I'm your destiny.</p></div>
      <div className="item"style={{backgroundColor:"#99ccff" , color:"white", width:"180px", height:"256px"}}><h1 style={{fontSize:"76px"}}>4</h1></div>
      <div className="item"><img src={step_3_4} alt="logo3-4" style={{width:"191px", height:"286px"}} /></div>
      <br/>
      </div>
      </div>
 
      {/* Calling 'Footer'*/}
      <Footer />
    </div>
  );
}

export default App;
