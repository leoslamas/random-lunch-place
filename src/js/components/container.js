import React, { Component } from 'react';
import axios from 'axios';

class Container extends Component {
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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Teste1</p>
                    </div>
                    <div className="col">
                        <p>Teste1</p>
                    </div>
                    <div className="col">
                        <p>Teste1</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;