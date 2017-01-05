import "../css/style.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {green200} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from './CountdownStore';
import Layout from './Layout';
import Switch from './components/Switch';
import Running from './pages/Running';
import Setting from './pages/Setting';

darkBaseTheme.palette.textColor = green200;

const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Switch}></IndexRoute>
                <Route path="setting" name="setting" component={Setting} store={store}></Route>
            </Route>
        </Router>
    </MuiThemeProvider>
);

const app = document.getElementById('app');

ReactDOM.render(<Main />, app);
