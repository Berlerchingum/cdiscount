import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';


let listeSalle1 = [
    {
        id: 0,
        idEtage: 0,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
    {
        id: 1,
        idEtage: 0,
        nom: "salle 2",
        state: true,
        slot: new Date(),
    },
    {
        id: 2,
        idEtage: 0,
        nom: "salle 3",
        state: false,
        slot: new Date(),
    },
];
let listeSalle2 = [
    {
        id: 0,
        idEtage: 1,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
    {
        id: 1,
        idEtage: 1,
        nom: "salle 2",
        state: true,
        slot: new Date(),
    },
];

let listeSalle3 = [
    {
        id: 0,
        idEtage: 2,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
];

let listeSalle4 = [
    {
        id: 0,
        idEtage: 3,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
    {
        id: 1,
        idEtage: 3,
        nom: "salle 2",
        state: false,
        slot: new Date(),
    },
];

let data = [
    {
        id: 0,
        name: 'Etage 1',
        salles: listeSalle1
    },
    {
        id: 1,
        name: 'Etage 2',
        salles: listeSalle2
    },
    {
        id: 2,
        name: 'Etage 3',
        salles: listeSalle3
    },
    {
        id: 3,
        name: 'Etage 4',
        salles: listeSalle4
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
          <ListEtage />
      </div>
    );
  }
}

class Etage extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.listeSalles = [];
        this.salles = props.listeSalles;
        this.salles.forEach( (salle) => {
            this.listeSalles.push(
                <Salle id={salle.id} state={salle.state} name={salle.nom} etageId={salle.idEtage} slot={salle.slot} />
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
        this.etageId = props.etageId;
        this.styleEmpty = {
            backgroundColor: 'lightgreen',
        };
        this.styleOccupied = {
            backgroundColor: 'red',
        };
    }
    render(){
        let text = "/salle/"+ this.etageId +"/"+ this.id;
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
        this.liste = [];
        data.forEach( (etage) => {
            this.liste.push(<Etage id={etage.id} name={etage.name} listeSalles={etage.salles} />)
        });


    };

    render() {
        return (
            <div>{this.liste}</div>
        );
    }
}

export default App;
