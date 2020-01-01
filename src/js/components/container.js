import React, { Component } from 'react'
import axios from 'axios'
import RestList from './rest-list'
import SortPanel from './sort-panel';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = { 
            yet: [], already: [], sort: "Test"
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const persons = res.data;
                this.setState({ yet: persons, already: persons })
            })
    }

    render() {
        return (
            <div className="container align-center">
                <div className="row text-center">
                    <div className="col">
                        <RestList list={this.state.yet} />
                    </div>
                    <div className="col">
                        <SortPanel sort={this.state.sort}/>
                    </div>
                    <div className="col">
                        <RestList list={this.state.yet} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container