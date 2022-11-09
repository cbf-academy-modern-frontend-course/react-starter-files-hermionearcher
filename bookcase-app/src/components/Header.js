import React from "react";

const Header = () => {
    const headerStyle = {
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: 0,

    }
    const searchRowStyle = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        gap: 10
    }
    const searchInputStyle = {
        width: "60%",
        // alignSelf: "center",
    }
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
    return (
        <div style={headerStyle}>
            <h1>My e-Book Library</h1>
            <p>Home | About | Bookcase (0)</p>
            <div style={searchRowStyle}>
                <input style={searchInputStyle} type="text" id="lname" name="search" placeholder="Enter name, author, keyword or genre..." />
                <button>Find</button>
            </div>
            <h2>Basket Total: £0.00</h2>
            <div style={buttonRowStyle}>
                <button style={buttonStyle}>{"<<First"}</button>
                <button style={buttonStyle}>{"<Previous"}</button>
                <button style={buttonStyle}>{"Next>"}</button>
                <button style={buttonStyle}>{"Last>>"}</button>
            </div>
            <h2>Suggested Reading</h2>
        </div>
    );
};

export default Header;
