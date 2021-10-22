import React, { Component } from 'react'
import Panel from './Panel'

export default class Props extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        const { attr1, attr2, attr3 } = this.props
        console.log(attr1, attr2, attr3)
    }
    render() {
        const { attr1, attr2, attr3 } = this.props

        return (
            <div>
                { attr1 === 'p' ? <p>PROPS</p> : <h1>PROPS</h1>}
                <Panel headercolor="red" bordercolor="green" headertext="This is a headertext" data="School of Net" />
                <Panel headercolor="gray" bordercolor="green" headertext="This is a headertext" data="School of Net" />
            </div>
        )
    }
}
