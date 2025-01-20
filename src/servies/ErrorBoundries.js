import React from "react";
import { useSnackbar } from 'notistack';

const ErrorBoundries = () => {
alert("i am calling")
    console.log(JSON.stringify("props", this.props));

    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love hooks');
    };

    return (
        <div onClick={handleClick}>Show snackbar</div>
    );
}

export default ErrorBoundries;