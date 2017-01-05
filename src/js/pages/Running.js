import React from 'react';
import Paper from 'material-ui/Paper';

export default class Running extends React.Component {
    render() {
        return (
            <Paper zDepth={4}>
                <h2>倒计时会在这里滴滴答答走起来。</h2>
            </Paper>
        );
    }
}
