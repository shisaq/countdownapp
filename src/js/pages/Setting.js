import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

import { observer } from 'mobx-react';

@observer
export default class Setting extends React.Component {
    submitInfo() {
        const projectName = document.getElementById('projectName').value;
        const deadline = document.getElementById('deadline').value;
        const duration = document.getElementById('duration').value;

        const data = {projectName, deadline, duration};
        this.props.route.store.submitData(data);
    }

    render() {
        console.log(this.props.route.store.cdData);
        const { projectName, deadline, duration } = this.props.route.store.cdData;

        return (
            <Paper zDepth={4}>
                倒计时名称：<TextField id="projectName" name="projectName" defaultValue={projectName} />
                <RadioButtonGroup name="timeType" defaultSelected="deadline">
                    <RadioButton
                        value="deadline"
                        label="截止日期"
                    />
                    <RadioButton
                        value="duration"
                        label="持续时长"
                    />
                </RadioButtonGroup>
                <DatePicker id="deadline" hintText="点击选择截止日期" />
                <TextField id="duration" name="duration" defaultValue={duration} />天
                <FlatButton
                    label="现在开始倒计时！"
                    onClick={this.submitInfo.bind(this)}
                />
            </Paper>
        );
    }
}
