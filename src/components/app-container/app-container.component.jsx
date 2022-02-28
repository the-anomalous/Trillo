import React from 'react'
import Header from '../header/header.component'
import Sidebar from '../sidebar/sidebar.component'
import HotelView from '../hotel-view/hotel-view.component'

const AppContainer = () => {
  return (
    <div className='container'>
      <Header />
      <div className='page-content' >
        <Sidebar />
        <HotelView/>
      </div>
    </div>
  )
}

export default AppContainer