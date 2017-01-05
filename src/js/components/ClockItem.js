import React from 'react';

export default class ClockItem extends React.Component {
    render() {
        return (
            <div>{this.props.number}</div>
        );
    }
}
