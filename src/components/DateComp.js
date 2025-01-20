import * as React from 'react';
import moment from 'moment';

export default function Status(props) {
    return (
        <React.Fragment>
            {moment(props.date).format('D/M/yyyy') == "Invalid date" ? props.date : moment(props.date).format('D/M/yyyy')}
        </React.Fragment>
    );
}
