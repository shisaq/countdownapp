import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { orange200 } from 'material-ui/styles/colors';

const style = {
    color: orange200
};

export default class AddNewOne extends React.Component {
    render() {
        return (
            <Paper zDepth={4}>
                <h3>点击<Link to="setting" style={style}>这里</Link>新建倒计时！</h3>
            </Paper>
        );
    }
}
