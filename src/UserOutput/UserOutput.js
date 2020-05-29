import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Username : {props.userName}</p>
            <p>Hello {props.userName}</p>
        </div>
    );
}

export default userOutput;