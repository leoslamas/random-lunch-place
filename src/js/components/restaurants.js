import React, { Component } from 'react';

import axios from 'axios';

class Restaurants extends Component {
    constructor(props){
        super(props);
        this.state = { 
            persons: [] 
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
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

export default Restaurants;