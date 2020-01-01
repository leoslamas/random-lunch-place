import React, { Component } from 'react'
import axios from 'axios'
import RestList from './rest-list'
import SortPanel from './sort-panel';

class Container extends Component {
    constructor(props){
        super(props);
        this.clickCallback = this.clickCallback.bind(this)
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

    clickCallback() {
        
        

    }

    render() {
        return (
            
            <div className="jumbotron">
                <div className="container align-center text-center">
                    <h1>Almoço</h1>
                    <div className="row h-100">
                        <div className="col-sm my-auto">
                            <RestList list={this.state.yet} stl="" />
                        </div>
                        <div className="col-sm my-auto">
                            <SortPanel sort={this.state.sort} clickCallback={this.clickCallback}/>
                        </div>
                        <div className="col-sm my-auto">
                            <RestList list={this.state.yet} stl="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container