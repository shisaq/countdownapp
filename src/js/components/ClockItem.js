import React from 'react';

const styles = {
    item: {
        listStyle: 'none',
        width: '25%'
    },
    number: {
        fontSize: '2em',
    },
    unit: {
        marginTop: 10,
        fontSize: '1.25em'
    }
};

export default class ClockItem extends React.Component {
    render() {
        const { number, unit, highlight } = this.props;
        return (
            <li style={styles.item}>
                <div style={styles.number}>
                    <span style={highlight}>{number}</span>
                </div>
                <div style={styles.unit}>{unit}</div>
            </li>
        );
    }
}
