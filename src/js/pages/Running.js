import React from 'react';
import ReactTimeout from 'react-timeout';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { deepOrange500, orange200 } from 'material-ui/styles/colors';

import ClockItem from '../components/ClockItem';

const styles = {
    bg: {
        padding: '20px 0'
    },
    name: {
        margin: 0,
        fontFamily: 'Roboto, sans-serif'
    },
    clock: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 600,
        margin: '20px auto'
    },
    sec: {
        color: deepOrange500
    },
    submit: {
        border: '1px solid ' + orange200,
        color: orange200
    }
};

@ReactTimeout
@observer
export default class Running extends React.Component {
    componentWillMount() {
        this.props.store.updateTime();
        const timeInterval = this.props.setInterval(() => {
            const { t, updateTime, terminateTime } = this.props.store;
            if (t <= 0) {
                this.props.clearInterval(timeInterval);
                terminateTime();
                return;
            }
            updateTime();
        }, 1000);
    }

    render() {
        const { projectName } = this.props.store.cdData;
        const { days, hours, min, sec, updateTime } = this.props.store;

        return (
            <Paper zDepth={4} style={styles.bg}>
                <h3 style={styles.name}>{ projectName }</h3>
                <ul style={styles.clock}>
                    <ClockItem unit='天' key={11} number={days} />
                    <ClockItem unit='时' key={12} number={hours} />
                    <ClockItem unit='分' key={13} number={min} />
                    <ClockItem unit='秒' key={14} number={sec} highlight={styles.sec} />
                </ul>
                <Link to="setting">
                    <FlatButton
                            label="修改"
                            style={styles.submit}
                    />
                </Link>
            </Paper>
        );
    }
}
