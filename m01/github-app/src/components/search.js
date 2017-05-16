'use strict'

import React from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input type='search' placeholder='digite o nome do usuário'
      onKeyUp={handleSearch} />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
