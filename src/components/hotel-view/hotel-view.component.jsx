import React from 'react'
import Overview from '../overview/overview.component'
import Details from '../details/details.component'
import CTA from '../cta/cta.component'

const HotelView = () => {
  return (
    <div className='hotel-view' >
      <Overview />
      <Details />
      <CTA/>
    </div>
  )
}

export default HotelView