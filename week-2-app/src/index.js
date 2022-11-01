// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom'; 

const name = 'Hermione';

function Greeting(name) {
  if (name) {
    return <h1>{name}'s React Page</h1>;
  }
  return <h1>Just a React Page</h1>;
}

ReactDOM.render(
[
Greeting(name)
],document.getElementById('root'));


