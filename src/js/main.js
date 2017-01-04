import "../css/style.css"
import React from 'react';
import ReactDOM from 'react-dom';
import {green200} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Layout from './Layout';

darkBaseTheme.palette.textColor = green200;

const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Layout />
    </MuiThemeProvider>
);

const app = document.getElementById('app');

ReactDOM.render(<Main />, app);
