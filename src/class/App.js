import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';


let listeSalle1 = [
    {
        id: 1,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
    {
        id: 2,
        nom: "salle 2",
        state: true,
        slot: new Date(),
    },
    {
        id: 3,
        nom: "salle 3",
        state: false,
        slot: new Date(),
    },
];
let listeSalle2 = [
    {
        id: 4,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
    {
        id: 5,
        nom: "salle 2",
        state: true,
        slot: new Date(),
    },
];

let listeSalle3 = [
    {
        id: 6,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
];

let listeSalle4 = [
    {
        id: 7,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
    {
        id: 8,
        nom: "salle 2",
        state: false,
        slot: new Date(),
    },
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
        </p>
          {/*<List />*/}
          <ListEtage />
      </div>
    );
  }
}

class Etage extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.listeSalles = [];
        this.salles = props.listeSalles;
        this.salles.forEach( (salle) => {
            this.listeSalles.push(
                <Salle id={salle.id} state={salle.state} name={salle.nom} slot={salle.slot} />
            )
        })
    }

    render() {
        return(
            <div className="row">
                <div className="card white col s6 offset-s3 offset-m3 m6" style={this.styleEmpty}>
                    <div className="card-content">
                        <span className="card-title">{this.name}</span>
                        <div>{this.listeSalles}</div>
                    </div>
                </div>
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
        this.id = props.id;
        this.styleEmpty = {
            backgroundColor: 'lightgreen',
        };
        this.styleOccupied = {
            backgroundColor: 'red',
        };
    }
    render(){
        let text = "/salle/"+ this.id;
        if(this.state.occupied === false){
            return (
                <Link to={text}>
                    <div className="card hoverable light-green col s12 offset-l1 offset-m1 m5 l3" style={this.styleOccupied}>
                        <div className="card-content white-text">
                            <p>{this.name}</p>
                        </div>
                    </div>
                </Link>
            );
        }else{
            return (
                <Link to={text} >
                    <div className="card hoverable red col s12 offset-l1 offset-m1 m5 l3" style={this.styleEmpty}>
                        <div className="card-content white-text">
                            <p>{this.name}</p>
                        </div>
                    </div>
                </Link>
            );
        }
    }
}

class ListEtage extends Component {
    constructor(props){
        super(props);
        this.liste = [
            <Etage name="Premier etage" listeSalles={listeSalle1} />,
            <Etage name="Deuxieme etage" listeSalles={listeSalle2} />,
            <Etage name="Troisieme etage" listeSalles={listeSalle3} />,
            <Etage name="Quatrieme etage" listeSalles={listeSalle4} />
        ]
    };

    render() {
        return (
            <div>{this.liste}</div>
        );
    }
}

export default App;
