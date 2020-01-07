import React, { Component } from 'react'
import axios from 'axios'
import RestList from './rest-list'
import SortPanel from './sort-panel';

class Container extends Component {
    constructor(props){
        super(props);
        this.clickCallback = this.clickCallback.bind(this)
        this.state = { 
            yet: [], already: [], sort: ""
        }
    }

    componentDidMount() {
        axios.get('/api/restaurants')
            .then(res => {
                const data = res.data;
                this.setState({ yet: data.yet, already: data.already })
            })
    }

    clickCallback() {
        axios.get('/api/sort')
            .then(res => {
                const data = res.data;
                this.setState({ yet: data.yet , already: data.already, sort: data.sorted })
            })
    }

    render() {
        return (
            
            <div className="jumbotron">
                <div className="container align-center text-center">
                    <h1>Almoço</h1>
                    <div className="row h-100">
                        <div className="col-sm my-auto">
                            <RestList list={this.state.yet} stl="info" />
                        </div>
                        <div className="col-sm my-auto">
                            <SortPanel sort={this.state.sort} clickCallback={this.clickCallback}/>
                        </div>
                        <div className="col-sm my-auto">
                            <RestList list={this.state.already} stl="danger" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container