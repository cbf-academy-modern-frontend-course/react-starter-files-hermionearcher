import React from 'react'

const buttonRowStyle = {
    display: "flex",
    alignSelf: "center",
    gap: 40
};
const buttonStyle = {
    backgroundColor: "#0467fc",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    borderRadius: "5px",
    fontSize: "1.1em",
    minWidth: "80px",
    cursor: "pointer",
};

const NavigationButtons = () => {
  return (
    <div style={buttonRowStyle}>
    <button style={buttonStyle}>{"<<First"}</button>
    <button style={buttonStyle}>{"<Previous"}</button>
    <button style={buttonStyle}>{"Next>"}</button>
    <button style={buttonStyle}>{"Last>>"}</button>
</div>  )
}

export default NavigationButtons