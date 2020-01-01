import React, { Component } from 'react'

class SortPanel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p>{this.props.sort}</p>
        )
    }
}

export default SortPanel