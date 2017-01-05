import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import DateShowcase from './DateShowcase';

export default class Radio extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 'deadline'
        };
    }

    handleChange(e) {
        console.log('选中的值', e.target.value);
        this.setState({
            selected: e.target.value
        });
        // console.log('state中的值', this.state.selected);
    }

    render() {
        const { selected } = this.state;
        const { deadline, duration } = this.props;
        return(
            <div>
                <RadioButtonGroup
                    name="timeType"
                    defaultSelected={selected}
                    onChange={this.handleChange.bind(this)}
                >
                    <RadioButton
                        value="deadline"
                        label="我知道截止日期"
                    />
                    <RadioButton
                        value="duration"
                        label="我知道要持续的天数"
                    />
                </RadioButtonGroup>
                <DateShowcase selected={selected} duration={duration} />
            </div>
        );
    }
}
