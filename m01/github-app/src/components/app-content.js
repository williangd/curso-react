'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './userinfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching, error }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} isDisabled={isFetching} />
    {isFetching && <div>Carregando...</div>}
    {error && <div className='error'>Usuário não existe</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos:'
        repos={starred}
      />
    }

  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
