import React, {Component} from 'react';
import { data } from '../Data/data'
import '../App.css';

class Room extends Component {
    activateToaster() {
        alert('mail envoyé !');
    }
    activateAsk() {
        alert('Réservation effectuée !')
    }
    componentWillMount(){

    }
    render() {
        // l'idée est de récupérer les donnnees du json à partir des paramètres fournis par la route :etageId et :salleId
        // On a choisi d'afficher la timeline au travers d'un tableau afin de faciliter le remplissage
        let salle = data[this.props.match.params.etageId].salles[this.props.match.params.salleId];
        let hoursList = [];
        for(let i = 9; i <= 20; i++){
            let occupied = false;
            salle.slot.forEach( (slot) => {
                // tant que la place n'est pas occupé on boucle, si elle est occupé plus de raison de boucler sur les slots
                if(occupied == false){
                    if(i == parseInt(slot.start.format('HH')) || (i < parseInt(slot.end.format('HH')) && i > parseInt(slot.start.format('HH'))) || i == parseInt(slot.end.format('HH'))){
                        occupied = true;
                    }
                    else
                        occupied = false;
                }
            });
            if(occupied == false){
                hoursList.push(<td className="green"></td>);
            }
            else
                hoursList.push(<td className="red"></td>);
        }
        return (
            <div className="App">
                <div className="row">
                    <SalleDetail state={salle.state} name={salle.nom} slot={salle.slot} />
                </div>
                <div className="row">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th className="center">9:00</th>
                                <th className="center">10:00</th>
                                <th className="center">11:00</th>
                                <th className="center">12:00</th>
                                <th className="center">13:00</th>
                                <th className="center">14:00</th>
                                <th className="center">15:00</th>
                                <th className="center">16:00</th>
                                <th className="center">17:00</th>
                                <th className="center">18:00</th>
                                <th className="center">19:00</th>
                                <th className="center">20:00</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    {hoursList}
                                </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <form className="container">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="start" type="text" className="validate"/>
                                <label htmlFor="email">Horaires de début</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="end" type="text" className="validate"/>
                                <label htmlFor="email">Horaires de fin</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                    <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col l1">
                                <a className="waves-effect waves-light btn" onClick={this.activateAsk}>Réserver</a>
                            </div>
                            <div className="col l10"></div>
                            <div className="col l1">
                                <button className="waves-effect waves-light btn" onClick={this.activateToaster}>Demander plus de matériel</button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


class SalleDetail extends Component {
    constructor(props) {
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
    componentWillMount(){
    }
    render() {
        if (this.state.occupied === false) {
            return (
                    <div className="card light-green col s12" style={this.styleOccupied}>
                        <div className="card-content white-text">
                            <span className="card-title">{this.name}</span>
                        </div>
                    </div>);
        } else {
            return (
                    <div className="card red col s12" style={this.styleEmpty}>
                        <div className="card-content white-text">
                            <span className="card-title">{this.name}</span>

                        </div>
                    </div>
            );
        }
    }
}

export default Room
