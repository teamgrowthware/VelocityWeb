import * as React from 'react';

export default function Status(props) {
    return (
        <React.Fragment>
                {props.imageURL == null ? '-' : <img className="thumbnail" src={process.env.react_app_base_url +"/"+ props.imageURL} alt="" />}
        </React.Fragment>
    );
}
