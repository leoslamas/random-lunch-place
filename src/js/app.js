import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min'
import '../css/style'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  Restaurants from './components/restaurants'

function teste() {
    alert("merda");
}

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        teste();
    }

    render () {
        return (<div>
            <input type="button" onClick={this.handleClick} value="Click Me"></input>
            <Restaurants/>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('list'))