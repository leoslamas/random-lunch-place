import React, { Component } from 'react'
import MyImage from '../../image/almoco.jpg'

class SortPanel extends Component {
    constructor(props) {
        super(props)
    }

    //<img src={MyImage} height="100" width="100"/>

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <img id="lunch-img" src="/almoco.jpg" height="100" width="100"/>
                    <h5 className="card-title">Today: {this.props.sort}</h5>
                    <hr className="my-4"></hr>
                    <div className="container">
                        <div className="row">
                            <div id="load-div" className="col-sm my-auto">
                                <div id="loading" className="spinner-border text-secondary" role="status" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm my-auto">
                                <a href="#" onClick={this.props.sortCallback} className="btn btn-primary">Draw</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm my-auto">
                                <a href="#" onClick={this.props.removeCallback} className="btn btn-danger">Remove</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SortPanel