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
    render() {
        let salle = data[this.props.match.params.etageId].salles[this.props.match.params.salleId];
        return (
            <div className="App">
                <div className="row">
                    <SalleDetail state={salle.state} name={salle.nom} slot={salle.slot} />
                </div>
                <div className="row">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>9:00</th>
                                <th>10:00</th>
                                <th>11:00</th>
                                <th>12:00</th>
                                <th>13:00</th>
                                <th>14:00</th>
                                <th>15:00</th>
                                <th>16:00</th>
                                <th>17:00</th>
                                <th>18:00</th>
                                <th>19:00</th>
                                <th>20:00</th>
                            </tr>
                        </thead>
                        <tbody>
                                <td className="red" id="9"></td>
                                <td className="red" id="10"></td>
                                <td className="green" id="11"></td>
                                <td className="green" id="12"></td>
                                <td className="green"id="13"></td>
                                <td className="green" id="14"></td>
                                <td className="red" id="15"></td>
                                <td className="red" id="16"></td>
                                <td className="green" id="17"></td>
                                <td className="red" id="18"></td>
                                <td className="red" id="19"></td>
                                <td className="red" id="20"></td>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <form className="container">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="start" type="text" className="validate"/>
                                <label for="email">Horaires de début</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="end" type="text" className="validate"/>
                                <label for="email">Horaires de fin</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                    <label for="email">Email</label>
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
