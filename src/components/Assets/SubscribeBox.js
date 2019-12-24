import React, { Component } from 'react'
import axios from 'axios'
import { URL_EMAIL } from './paths'

export default class SubscribeBox extends Component {

  state = {
    email: '',
    error: false,
    success: false,
    existingAccount: false
  }

  clearMessages = () => {
    setTimeout(() => {
      this.setState({
        error: false,
        success: false,
        existingAccount: false
      })
    }, 3000)
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let email = this.state.email;
    let regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {

    } else {
      this.setState(prevState => ({
        error: !prevState.error
      }))
    }

    this.clearMessages()



  }



  handleInputChange = (e) => {
    this.setState({
      email: e.target.value
    })

  }



  render() {
    const { email, error, success, existingAccount } = this.state
    return (
      <div className="subscribe_panel">
        <h3>Subscribe Now</h3>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              value={email}
              placeholder="Enter your email"
              onChange={this.handleInputChange}
            />
            <div className={error ? "error show" : "error"}>Check your email</div>
            <div className={success ? "success show" : "success"}>Thank you</div>
            <div className={existingAccount ? "success show" : "success"}>Already registered</div>
          </form>
        </div>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellat reprehenderit? In ipsam omnis cum labore ut accusamus eaque consequatur!</small>
      </div>
    )
  }
}


