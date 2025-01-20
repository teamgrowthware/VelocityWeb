import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


export default function StatusReverse(props) {
    return (
        <React.Fragment>
            {props.status === '0' ?
                <IconButton color="primary" aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true">
                    <HighlightOffIcon></HighlightOffIcon>
                </IconButton>
                : <IconButton color="primary" aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true">
                    <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                </IconButton>
            }
        </React.Fragment>
    );
}
