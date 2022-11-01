import React from 'react'

const Greeting = (props) => {
    return (
        <div>
            {props.name}
            {props.bio}
        </div>
    )
}

export default Greeting