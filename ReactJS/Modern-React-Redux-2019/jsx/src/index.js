//import the react and react-dom libraries.

import React from 'react';
import ReactDOM from 'react-dom';


//create a react component.
const App = () =>
{
    return <div>Hello, World!</div>
}

//take a react component and show it on screen.
ReactDOM.render(
    <App></App>,
    document.querySelector('#root')
);