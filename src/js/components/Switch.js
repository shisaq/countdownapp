import React from 'react';
import Paper from 'material-ui/Paper';
import { observer } from 'mobx-react';

import Running from '../pages/Running';
import AddNewOne from '../pages/AddNewOne';

@observer
export default class Switch extends React.Component {
    render() {
        const { store } = this.props.route;
        const result = localStorage.countdownData ?
            <Running store={store} /> :
            <AddNewOne />;
        return (
            <div>
                {result}
            </div>
        );
    }
}
