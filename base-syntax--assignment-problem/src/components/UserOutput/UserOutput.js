import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {

    const userOutputStyle = {
        textAlign: 'center'
    }

    const secondParagraphStyle = {
        color: 'lightgrey'
    }

    return (
        <div style={userOutputStyle}>
            <p> User Output Component </p>
            <p class="second-paragraph-size" style={secondParagraphStyle}> Received from props: {props.username} </p>
        </div>
    )
}

export default UserOutput;