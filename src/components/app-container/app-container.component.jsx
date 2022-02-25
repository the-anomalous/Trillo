import React from 'react'
import Header from '../header/header.component'
import PageContent from '../page-content/page-content.component'

const AppContainer = () => {
  return (
    <div className='container'>
      <Header />
      <PageContent/>
    </div>
  )
}

export default AppContainer