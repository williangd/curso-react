'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

/* const App = React.createClass({
  render: function () {
    return (
      <div>
        <Title name='Willian' />
      </div>
    )
  }
}) */

export default App
