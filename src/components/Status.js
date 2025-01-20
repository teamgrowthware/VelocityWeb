import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


export default function Status(props) {
    return (
        <React.Fragment>
            {props.status === '1' ?
                <IconButton color="primary" aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true">
                    <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                </IconButton>
                : <IconButton color="primary" aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true">
                    <HighlightOffIcon></HighlightOffIcon>
                </IconButton>}
        </React.Fragment>
    );
}
