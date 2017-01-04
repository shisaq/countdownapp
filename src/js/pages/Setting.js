import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';

export default class Setting extends React.Component {
    render() {
        return (
            <Paper>
                倒计时名称：<TextField name="projectName" />
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
                <DatePicker hintText="点击选择截止日期" />
                <TimePicker hintText="点击选择截止时间" />
                <TextField name="duration" />天
                <FlatButton label="现在开始倒计时！" />
            </Paper>
        );
    }
}
