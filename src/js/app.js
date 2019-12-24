import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function teste() {
    alert("merda");
}

class Botao extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        teste();
    }

    render () {
        return (<input type="button" onClick={this.handleClick}></input>);
    }

}

ReactDOM.render(<Botao/>, document.getElementById('btn'))