'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/userinfo'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    <Search />

    <UserInfo />

    <Actions />

    <Repos
      className='repos'
      title='Repositórios:'
      repos={[
        {
          name: 'Xablau',
          link: '#'
        },
        {
          name: 'Repo2',
          link: '#'
        },
        {
          name: 'Repo3',
          link: '#'
        }
      ]} />

    <Repos
      className='starred'
      title='Favoritos:'
      repos={[{
        name: 'Xablau',
        link: '#'
      }]} />

  </div>
)

export default App
