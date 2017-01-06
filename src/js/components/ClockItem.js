import React from 'react';

export default class ClockItem extends React.Component {
    render() {
        const { number, unit } = this.props;
        return (
            <div>{number}{unit}</div>
        );
    }
}
