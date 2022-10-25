import React from 'react';
import ReactDOM from 'react-dom/client';

const name = '[YOUR NAME GOES HERE]';

function Profile(name){
    return <main id="content" role="main" className="base">
            <h1>{name}'s React Page</h1>
              <p>Example of react JSX in action</p>
            </main>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile());

