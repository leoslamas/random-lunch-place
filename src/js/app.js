import 'bootstrap/dist/css/bootstrap.min'
import '../css/style.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Restaurants from './components/restaurants'

function App() {
    return (<Restaurants/>);
}

ReactDOM.render(<App/>, document.getElementById('app'))