import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

export default class DateShowcase extends React.Component {
    render() {
        const { selected, duration } = this.props;
        const deadlineComponent = (<DatePicker
            id="deadline"
            name="deadline"
            hintText="点击选择截止日期"
        />);
        const durationComponent = (<TextField
            id="duration"
            name="duration"
            floatingLabelText="单位：天"
            defaultValue={duration}
        />);
        const deadlineOrDuration = selected === 'deadline' ?
            deadlineComponent : durationComponent;

        return(
            <div>
                {deadlineOrDuration}
            </div>
        );
    }
}
