import React from 'react'
import Header from '../header/header.component'
import Sidebar from '../sidebar/sidebar.component'
import MainContent from '../main-content/main-content.component'

const AppContainer = () => {
  return (
    <div className='container'>
      <Header />
      <div className='page-content' >
        <Sidebar />
        <MainContent/>
      </div>
    </div>
  )
}

export default AppContainer