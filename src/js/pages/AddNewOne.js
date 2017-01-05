import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

export default class AddNewOne extends React.Component {
    render() {
        return (
            <Paper zDepth={4}>
                <Link to="setting">
                    <h2>点击这里新建一个倒计时！</h2>
                </Link>
            </Paper>
        );
    }
}
