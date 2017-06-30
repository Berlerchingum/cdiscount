import React, {Component} from 'react';
import moment from 'moment'
import '../App.css';

let listeSlot1 = [
    {
        start: new moment("2017-06-30 10:00"),
        end: new moment("2017-06-30 11:00"),
    },
    {
        start: new moment("2017-06-30 15:00"),
        end: new moment("2017-06-30 17:00"),
    }
];
let listeSalle1 = [
    {
        id: 0,
        idEtage: 0,
        nom: "salle 1",
        state: false,
        slot: listeSlot1,
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
        slot: new Date(''),
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



class Room extends Component {
    activateToaster() {
        alert('mail envoyé !');
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
                                <td id="9"></td>
                                <td id="10"></td>
                                <td id="11"></td>
                                <td id="12"></td>
                                <td id="13"></td>
                                <td id="14"></td>
                                <td id="15"></td>
                                <td id="16"></td>
                                <td id="17"></td>
                                <td id="18"></td>
                                <td id="19"></td>
                                <td id="20"></td>
                        </tbody>
                    </table>
                    <button className="waves-effect waves-light btn" onClick={this.activateToaster}>Demander plus de matériel</button>
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

    componentWillMount(){

    }
}

export default Room
