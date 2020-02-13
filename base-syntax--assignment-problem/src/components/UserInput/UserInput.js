import React from 'react';
import './UserInput.css'

const UserInput = (props) => {

    const userInputStyle = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div style={userInputStyle}>
            <input class="input-background" value={props.username} onChange={props.change} type="text" />
        </div>
    )
}

export default UserInput;