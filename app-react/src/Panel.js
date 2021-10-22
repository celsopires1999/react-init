import React, {Component} from "react"

export default class Panel extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const { headercolor, bordercolor, headertext, data } = this.props
        return (
            <div className="panel" style={{ border: `1px solid ${bordercolor}`, width: '500px'}}>
                <div className="panel-head" style={{ width: '100%', height: '25px', backgroundColor: headercolor}}>
                    { headertext }
                </div>
                <div className="panel-body">
                    { data }
                </div>
            </div>
        )
    }
}