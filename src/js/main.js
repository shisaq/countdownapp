import "../css/style.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// material-ui theme
import {
    orange200,
    grey600,
    pinkA100, pinkA200, pinkA400,
    fullWhite, green200
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import store from './CountdownStore';
import Layout from './Layout';
import Switch from './components/Switch';
import Running from './pages/Running';
import Setting from './pages/Setting';


const customizedTheme = {
    spacing: spacing,
    fontFamily: 'miaofont, Roboto, sans-serif',
    palette: {
        primary1Color: orange200,
        primary2Color: orange200,
        primary3Color: grey600,
        accent1Color: pinkA200,
        accent2Color: pinkA400,
        accent3Color: pinkA100,
        textColor: green200,
        secondaryTextColor: fade(fullWhite, 0.7),
        alternateTextColor: '#303030',
        canvasColor: '#303030',
        borderColor: fade(fullWhite, 0.3),
        disabledColor: fade(fullWhite, 0.3),
        pickerHeaderColor: fade(fullWhite, 0.12),
        clockCircleColor: fade(fullWhite, 0.12),
    }
};
const muiTheme = getMuiTheme(customizedTheme);

const Main = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Switch} store={store}></IndexRoute>
                <Route path="setting" name="setting" component={Setting} store={store}></Route>
            </Route>
        </Router>
    </MuiThemeProvider>
);

const app = document.getElementById('app');

ReactDOM.render(<Main />, app);
