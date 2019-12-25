import React, { Component } from 'react'
import axios from 'axios'
import { URL_HOME } from '../Assets/paths'
import SliderWidget from '../Assets/SliderWidget'
import SubscribeBox from '../Assets/SubscribeBox'
import ImageBlocks from './ImageBlocks'


class Home extends Component {

  state = {
    home: ''
  }

  componentDidMount() {
    axios.get(URL_HOME)
      .then(response => {
        console.log(response.data)
        this.setState({ home: response.data })
      })
  }



  render() {
    const { slider, blocks } = this.state.home
    return (
      <>
        <SliderWidget slides={slider} />
        <SubscribeBox />
        <ImageBlocks blocks={blocks} />
      </>
    )
  }
}

export default Home;