import React from 'react';
import Paper from 'material-ui/Paper';

import Header from './components/Header';

const style = {
    textAlign: 'center',
    marginTop: 60
};

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div style={style}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
