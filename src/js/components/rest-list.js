import React, { Component } from 'react'

class RestList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <select name="select" multiple size="20">
                { this.props.list.map(item => <option value={item.id}>{item.name}</option>) }
            </select>
        )
    }
}

export default RestList