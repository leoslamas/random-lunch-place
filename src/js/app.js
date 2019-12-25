import '../css/style.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
        return (
            <input type="button" onClick={this.handleClick}></input>
        );
    }

}

class PersonList extends Component {
    constructor(props){
        super(props);
        this.state = { persons: [] };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}

ReactDOM.render(<Botao/>, document.getElementById('btn'))
ReactDOM.render(<PersonList/>, document.getElementById('list'))