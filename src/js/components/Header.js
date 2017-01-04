import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    width: '100%',
    marginTop: 60,
    padding: '10px 0',
    textAlign: 'center',
    display: 'inline-block',
};

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Paper style={style} zDepth={4}>
                    <h1>倒计时来了!</h1>
                </Paper>
            </header>
        );
    }
}
