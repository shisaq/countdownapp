import React from 'react';
import Paper from 'material-ui/Paper';

import Header from './components/Header';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
