import React from 'react'

const Details = () => {
  return (
    <div className='details' >
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
        </p>

        <p className="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>

        <ul className="list">
          <li className="list__item">Close to the beach</li>
          <li className="list__item">Breakfast included</li>
          <li className="list__item">Free airport shuttle</li>
          <li className="list__item">Free wifi in all rooms</li>
          <li className="list__item">Air conditioning and heating</li>
          <li className="list__item">Pets allowed</li>
          <li className="list__item">We speak all languages</li>
          <li className="list__item">Perfect for all families</li>
        </ul>

        <div className="recommend">
          <p className="recommend__count">Lucy and his 3 friends recommended</p>
          
          <div className="recommend__friends">
            <img src={require('../../assets/user-3.jpg')} alt="user-3" className="recommend__photo" />
            <img src={require('../../assets/user-4.jpg')} alt="user-4" className="recommend__photo" />
            <img src={require('../../assets/user-5.jpg')} alt="user-5" className="recommend__photo" />
            <img src={require('../../assets/user-6.jpg')} alt="user-6" className="recommend__photo" />
          </div>
        </div>
      </div>

      <div className="reviews">
        User Review
      </div>
    </div>
  )
}

export default Details