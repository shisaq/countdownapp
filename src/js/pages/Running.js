import React from 'react';
import ReactTimeout from 'react-timeout';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

import ClockItem from '../components/ClockItem';

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
            <Paper zDepth={4}>
                <h2>{ projectName }</h2>
                <ul>
                    <ClockItem unit='天' key={11} number={days} />
                    <ClockItem unit='时' key={12} number={hours} />
                    <ClockItem unit='分' key={13} number={min} />
                    <ClockItem unit='秒' key={14} number={sec} />
                </ul>
                <Link to="setting">修改</Link>
            </Paper>
        );
    }
}
