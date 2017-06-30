import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
        </p>
          <List />
      </div>
    );
  }
}

class Salle extends Component {
    constructor(props){
        super(props);
        this.state = {occupied: props.state};
        this.name = props.name;
        this.slot = props.slot;
        this.styleEmpty = {
            backgroundColor: 'lightgreen',
        };
        this.styleOccupied = {
            backgroundColor: 'red',
        };
    }
    render(){
        if(this.state.occupied === false){
            return (
                <div  className="row">
                        <div className="card light-green col s6 offset-s3 offset-m3 m6" style={this.styleOccupied}>
                            <div className="card-content white-text">
                                <span className="card-title">Card Title</span>
                                <p>{this.name}</p>
                                <p>{this.slot.getDate()}</p>
                            </div>
                        </div>
                </div>);
        }else{
            return (
                <div className="row">
                      <div className="card red col s6 offset-s3 offset-m3 m6" style={this.styleEmpty}>
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>{this.name}</p>
                            <p>{this.slot.getDate()}</p>
                        </div>
                    </div>
            </div>);
        }
    }
}

class List extends Component {
    constructor(props){
        super(props);
        this.liste = [
            <Salle state={false} name="Premiere salle" slot={new Date()} />,
            <Salle state={true} name="Deuxieme salle" slot={new Date()} />,
            <Salle state={false} name="Troisieme salle" slot={new Date()} />,
            <Salle state={true} name="Quatrieme salle" slot={new Date()} />
        ]
    };

    render() {
        return (
            <div>{this.liste}</div>
        );
    }
}

export default App;
