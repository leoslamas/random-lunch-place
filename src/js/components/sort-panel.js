import React, { Component } from 'react'

class SortPanel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.sort}</h5>
                    <hr class="my-4"></hr>
                    <a href="#" onClick={this.props.clickCallback} className="btn btn-primary">Sortear</a>
                </div>
            </div>
        )
    }
}

export default SortPanel