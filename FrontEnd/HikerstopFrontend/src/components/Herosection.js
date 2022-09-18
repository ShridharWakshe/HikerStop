import React from "react";
import "../App.css";
import "./Herosection.css";
import { Button } from "./Button";

function herosection(){
    return(
        <div className='hero-container'>
            <h1>HIKERSTOP</h1>
            <h2>Adventure is Awaits</h2>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns'  buttonStyle="btn--outline" buttonSize="btn--large ">Get Started</Button>
                <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large">
                    Watch Trailor <i className="far fa-play-circle"/> 
                </Button>
            </div>
        </div>
    )
};

export default herosection
