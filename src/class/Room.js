import React, { Component } from 'react';
import { PolarGantt } from '../clock/clock.js';
import logo from '../logo.svg';
import '../App.css';
import '../clock/clock.scss'


class Room extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="sm6 offset">
                    <Clock />
                </div>
            </div>
        );
    }
}

class Clock extends Component {
    constructor(props){
        super(props);
        this.polarGantt = new PolarGantt();
    }
    render(){
        return (
            <div className="polar-gantt">
                <div id="target" />
            </div>
        );
    }
}

export default Room