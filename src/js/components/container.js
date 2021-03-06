import React, { Component } from 'react'
import axios from 'axios'
import RestList from './rest-list'
import SortPanel from './sort-panel';
import $ from 'jquery';

class Container extends Component {
    choice=-1;
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
                $('#loading').hide();
            })
    }

    sortCallback() {
        $('#loading').show();
        axios.get('/api/sort')
            .then(res => {
                const data = res.data;
                this.setState({ yet: data.yet , already: data.already, sort: data.sorted })
                $('#loading').hide();
            })
            
    }

    removeCallback() {
        if (this.choice >= 0) {
            $('#loading').show();
            axios.delete(`/api/remove/${this.choice}`)
                .then(res => {
                    const data = res.data;
                    this.setState({ yet: data.yet, already: data.already, sort: data.sorted })
                    $('#loading').hide();
                })
            this.choice = -1;
        }
    }

    handleChange(e){
        this.choice = e.target.value;
    }

    render() {
        return (
            
            <div className="jumbotron">
                <div className="container align-center text-center">
                    <h1>Random Lunch</h1>
                    <div className="row h-100">
                        <div className="col-sm my-auto d-none d-md-block">
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