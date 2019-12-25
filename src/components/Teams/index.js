import React, { Component } from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { URL_TEAMS } from '../Assets/paths'
import { Link } from 'react-router-dom'

export default class Teams extends Component {

  state = {
    teams: [],
    filtered: [],
    keyword: ''
  }


  componentDidMount() {
    axios.get(URL_TEAMS)
      .then(response => {
        this.setState({
          teams: response.data,
          filtered: response.data
        })
        console.log(this.state)
      })
  }

  teamsLogoTemplate = (filtered) => (
    filtered.map((item, index) => (
      <CSSTransition key={index} timeout={500} classNames="fade">
        <Link to={`/team/${item.name}`} className="team_item">
          <img src={`/images/teams/${item.logo}`} alt="" />
        </Link>
      </CSSTransition>
    ))
  )





  render() {
    return (
      <div className="teams_component">
        <div className="teams_input">
          <input
            type="text"
            value={this.state.keyword}

            placeholder="Search for a team"
          />
        </div>
        <div className="teams_container">
          <TransitionGroup component="span">

            {this.teamsLogoTemplate(this.state.filtered)}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}
