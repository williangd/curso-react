'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input type='search' placeholder='digite o nome do usuário'
      onKeyUp={handleSearch} disabled={isDisabled} />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
