import React, { useState } from 'react'

const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0)

    const handleClickInc = () => {
        setClickCount(prevCount => prevCount + 1)
    }
    const handleClickDec = () => {
        setClickCount(prevCount => prevCount - 1)
    }
    const buttonWrapperStyle = {
        display: "flex"
    }
    const clickStyle = {
        backgroundColor: "red",
        border: "none",
        borderRadius: "5px",
        height: "7vh",
        width: "15vh",
        color: "white"
    }
    const unclickStyle = {
        backgroundColor: "blue",
        border: "none",
        borderRadius: "5px",
        height: "7vh",
        width: "15vh",
        color: "white"        
    }

  return (
    <div>
        <h1>Count: {clickCount}</h1>
        <p>Click the button to increment the counter</p>
        <div style={buttonWrapperStyle}>
            <button style={clickStyle} onClick={handleClickInc}>Click!</button>
            <button style={unclickStyle} onClick={handleClickDec}>Unclick!</button>
        </div>
    </div>
  )
}

export default ClickCounter