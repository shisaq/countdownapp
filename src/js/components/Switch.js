import React from 'react';
import Paper from 'material-ui/Paper';

import Running from '../pages/Running';
import AddNewOne from '../pages/AddNewOne';

export default class Switch extends React.Component {
    render() {
        const result = localStorage.countdownData ?
            <Running /> :
            <AddNewOne />;
        return (
            <div>
                {result}
            </div>
        );
    }
}
