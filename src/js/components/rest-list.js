import React, { Component } from 'react'

class RestList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <select onChange={this.props.handler} disabled={this.props.stl==='info'} name="select" className={`border border-${this.props.stl} rounded`} size="20">
                <option selected disabled>Select:</option>
                { this.props.list.map(item => <option key={item.id} value={item.id}>{item.name}</option>) }
            </select>
        )
    }
}

export default RestList