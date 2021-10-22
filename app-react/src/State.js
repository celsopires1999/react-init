import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: 'Celso',
            gols: 12
        }
        console.log(this.state)
    }
    render() {
        const { player, gols} = this.state
        return (
            <div>
            <p>State</p>
            <p>{ `${this.state.player} is the best soccer player because he has scored ${this.state.gols} gols`}</p>
            <p>{`Just to confirm what I said. ${player} has scored ${gols} gols already during this season.`}</p>
            </div>
        )
    }
}