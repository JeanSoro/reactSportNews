import React, { Component } from 'react'
import axios from 'axios';
import { URL_TEAMS } from '../Assets/paths'

export default class Poll extends Component {

  state = {
    inPoll: []
  }

  getPoll() {
    axios.get(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`)
      .then(response => {
        this.setState({ inPoll: response.data })
      })
  }


  componentDidMount() {
    this.getPoll()
  }

  renderPoll() {
    const rankings = ['1ST', '2ND', '3RD'];
    return this.state.inPoll.map((team, index) => (
      <div
        key={index}
        className="poll_item"
      >
        <img src={`/images/teams/${team.logo}`} alt={team.name} />
        <h4>{rankings[index]}</h4>
        <div>{team.count} Votes</div>
      </div>
    ))
  }


  render() {
    return (
      <>
        <div className="home_poll">
          <h3>Who will take it?</h3>
          <div className="poll_container">
            {this.renderPoll()}
          </div>
        </div>
      </>
    )
  }
}
