import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { observer } from 'mobx-react';

import Radio from '../components/Radio';

@observer
export default class Setting extends React.Component {
    constructor() {
        super();
        this.state = {
            errorText: ''
        };
    }

    submitInfo() {
        const projectName = document.getElementById('projectName');
        const deadline = document.getElementById('deadline');
        const duration = document.getElementById('duration');

        if (!projectName.value) {
            this.setState({
                errorText: '起个名字吧！'
            });
            return;
        }

        const data = deadline ? {
            projectName: projectName.value,
            deadline: deadline.value
        } : {
            projectName: projectName.value,
            duration: duration.value
        };

        this.props.route.store.submitData(data);
    }

    render() {
        console.log(this.props.route.store.cdData);
        const { projectName, deadline, duration } = this.props.route.store.cdData;

        return (
            <Paper zDepth={4}>
                倒计时名称：
                <TextField
                    id="projectName"
                    name="projectName"
                    defaultValue={projectName}
                    errorText={this.state.errorText}
                />
                <Radio deadline={deadline} duration={duration} />
                <FlatButton
                    label="现在开始倒计时！"
                    onClick={this.submitInfo.bind(this)}
                />
            </Paper>
        );
    }
}
