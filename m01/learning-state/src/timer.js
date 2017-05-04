'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.timer = 0
  }

  componentWillReceiveProps (nextProps) {
    console.log('WProps', this.props, nextProps)
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({time: this.state.time + 1})
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.time !== nextState.time
  }

  render () {
    return (
      <div>Time: {this.state.time}</div>
    )
  }
}

export default Timer
