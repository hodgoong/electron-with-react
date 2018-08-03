import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import myApp from './reducers';

let store = createStore(myApp);

function render(){
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

store.subscribe(render);

render();