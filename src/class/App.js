import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import logo from '../logo.svg';
import { data } from '../Data/data'
import '../App.css';

class App extends Component {
    activateToaster() {
        alert('Synchronisation reussie !');
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="row">
                <div className="col s3 offset-s3">
                    <a className="waves-effect waves-light btn">Paramètres</a>
                </div>
                <div className="col s3">
                    <a className="waves-effect waves-light btn" onClick={this.activateToaster}>Synchoniser</a>
                </div>
            </div>
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
