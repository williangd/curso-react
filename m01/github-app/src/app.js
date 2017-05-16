'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        })
    }
  }

  getRepos (e) {
    const value = this.state.userinfo.login
    ajax().get(`https://api.github.com/users/${value}/repos`)
      .then((result) => {
        this.setState({ repos: result })
      })
  }

  getStarred (e) {
    const value = this.state.userinfo.login
    ajax().get(`https://api.github.com/users/${value}/starred`)
      .then((result) => {
        this.setState({ starred: result })
      })
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={(e) => this.getRepos(e)}
      getStarred={(e) => this.getStarred(e)}
    />
  }
}

export default App
