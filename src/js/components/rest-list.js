import React, { Component } from 'react'

class RestList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <select disabled={this.props.stl==='info'} name="select" className={`border border-${this.props.stl} rounded`} multiple size="20">
                { this.props.list.map(item => <option key={item.id} value={item.id}>{item.name}</option>) }
            </select>
        )
    }
}

export default RestList