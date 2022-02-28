import React from 'react'

const CTA = () => {
  return (
    <div className='cta'>
      <h2 className="cta__book-now">
        Good News! We have 4 rooms free from your selected date
      </h2>
      
      <button className="cta__btn">
        <span className="cta__btn--visible">Book now</span>
        <span className="cta__btn--invisible">Only 4 rooms left</span>
      </button>
    </div>
  )
}

export default CTA