import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';

import App from './class/App';
import Room from './class/Room';

// Routing
const RouterMapping = () => (
    <Router>
        <switch>
            <Route exact path="/" component={App} />
            <Route path='/salle/:etageId/:salleId' component={Room} />
        </switch>
    </Router>
);

ReactDOM.render(
    <RouterMapping />,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
