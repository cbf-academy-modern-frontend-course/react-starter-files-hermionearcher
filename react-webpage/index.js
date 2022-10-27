'use strict';

function ClickableButton() {

    const [clicked, setClick] = React.useState(false);

    if (clicked) {
        return React.createElement('h1', null, 'Hello World ✌');
    }

    return React.createElement(
        'button', {
        style: {
            backgroundColor: "red",
            color: "#fff",
            border: "0",
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "5px",
            fontSize: "1.1em",
        },
        onClick: () => setClick(true)
    },
        'Press Here'
    );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(React.createElement(ClickableButton));