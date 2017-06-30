import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';


class Room extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    {/*<div className="App-header">*/}
                        <SalleDetail state={true} name="Deuxieme salle" slot={new Date()} />
                    {/*</div>*/}
                </div>
                <div className="row">
                    <div className="col s1">
                        <table className="responsive">
                            <tbody>
                            <tr>
                                <th>9</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>10</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>11</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>12</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>13</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>14</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>15</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>16</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>17</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>18</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>19</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <th>20</th>
                                <th>
                                    <table>
                                        <tbody>
                                        <tr></tr>
                                        <tr>15</tr>
                                        <tr>30</tr>
                                        <tr>45</tr>
                                        </tbody>
                                    </table>
                                </th>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="col s9">

                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
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
                            <span className="card-title">Salle de réunion 1</span>
                            <p>{this.name}</p>
                            <p>{this.slot.getDate()}</p>
                        </div>
                    </div>);
        } else {
            return (
                    <div className="card red col s12" style={this.styleEmpty}>
                        <div className="card-content white-text">
                            <span className="card-title">Salle de réunion 1</span>
                            <p>{this.name}</p>
                            <p>{this.slot.getDate()}</p>
                        </div>
                    </div>
            );
        }
    }
}

export default Room
