import React from 'react';

function Account(props) {
    return (
        <div>
            <img src={props.avatar} alt="avatar" />
            <h2>{props.business}</h2>
        </div>
    );
}

export default Account;
