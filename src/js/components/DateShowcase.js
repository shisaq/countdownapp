import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

export default class DateShowcase extends React.Component {
    formatDate(date){
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    }

    render() {
        const { selected, duration } = this.props;
        const deadlineComponent = (<DatePicker
            formatDate={this.formatDate}
            id="deadline"
            name="deadline"
            floatingLabelText="点击这里选择截止日期"
            autoOk={true}
        />);
        const durationComponent = (<TextField
            id="duration"
            name="duration"
            floatingLabelText="点击这里输入持续天数"
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
