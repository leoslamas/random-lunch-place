import React, { Component } from 'react'

class SortPanel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Hoje: {this.props.sort}</h5>
                    <hr className="my-4"></hr>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm my-auto">
                                <a href="#" onClick={this.props.sortCallback} className="btn btn-primary">Sortear</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm my-auto">
                                <a href="#" onClick={this.props.removeCallback} className="btn btn-danger">Remover Último</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SortPanel