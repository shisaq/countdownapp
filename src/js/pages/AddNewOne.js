import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

export default class AddNewOne extends React.Component {
    render() {
        return (
            <Paper zDepth={4}>
                <h2>点击<Link to="setting">这里</Link>新建一个倒计时！</h2>
            </Paper>
        );
    }
}
