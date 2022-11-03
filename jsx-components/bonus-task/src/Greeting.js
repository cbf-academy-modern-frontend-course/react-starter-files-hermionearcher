import React from 'react'

const Greeting = (props) => {
    return (
        <div className="greeting--form">
            <h1>Form Inputs</h1>
            <p>Name: {props.name}</p>
            <p>Bio: {props.bio}</p>
        </div>
    )
}

export default Greeting