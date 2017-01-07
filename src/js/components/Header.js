import React from 'react';
import Paper from 'material-ui/Paper';
import { orange200 } from 'material-ui/styles/colors';

const style = {
    width: '100%',
    marginTop: 60,
    padding: '10px 0',
    textAlign: 'center',
    color: orange200,
    display: 'inline-block',
};

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Paper style={style} zDepth={4}>
                    <h1>我的倒计时</h1>
                </Paper>
            </header>
        );
    }
}
