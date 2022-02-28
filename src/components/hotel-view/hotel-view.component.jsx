import React from 'react'
import Overview from '../overview/overview.component'
import Details from '../details/details.component'

const HotelView = () => {
  return (
    <div className='hotel-view' >
      <Overview />
      <Details/>
    </div>
  )
}

export default HotelView