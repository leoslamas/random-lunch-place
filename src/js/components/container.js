import React, { Component } from 'react'
import axios from 'axios'
import RestList from './rest-list'
import SortPanel from './sort-panel';

class Container extends Component {
    constructor(props){
        super(props);
        this.sortCallback = this.sortCallback.bind(this)
        this.removeCallback = this.removeCallback.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = { 
            yet: [], already: [], sort: ""
        }
    }

    componentDidMount() {
        axios.get('/api/restaurants')
            .then(res => {
                const data = res.data;
                this.setState({ yet: data.yet, already: data.already, sort: data.sorted })
            })
    }

    sortCallback() {
        axios.get('/api/sort')
            .then(res => {
                const data = res.data;
                this.setState({ yet: data.yet , already: data.already, sort: data.sorted })
            })
    }

    removeCallback() {
        console.log('/api/remove/?');
    }

    handleChange(e){
        console.log(e.target.value);
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
                            <SortPanel sort={this.state.sort} sortCallback={this.sortCallback} removeCallback={this.removeCallback}/>
                        </div>
                        <div className="col-sm my-auto">
                            <RestList id="sorted-list" list={this.state.already} stl="danger" handler={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container