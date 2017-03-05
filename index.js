/**
 * Created by protp on 2017/2/26.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import App from './modules/App';
import Home from './modules/Home';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';
render ((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/About" component={About}></Route>
            <Router path="/Repos" component={Repos}>
                <Route path="/Repos/:username/:repoName" component={Repo}></Route>
            </Router>
        </Route>
    </Router>
), document.getElementById('app'));
