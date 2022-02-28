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
        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
          </blockquote>
          
          <figcaption className="review__user">
            <img src={require('../../assets/user-1.jpg')} alt="user 1" className="review__user-photo" />
            <div className="review__user-box">
              <p className="review__user--name">Nick Smith</p>
              <p className="review__user-date">Feb 23rd, 2022</p>
            </div>
            <div className="review__rating">7.6</div>
          </figcaption>
        </figure>

        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
          </blockquote>

          <figcaption className="review__user">
            <img src={require('../../assets/user-2.jpg')} alt="user 2" className="review__user-photo" />
            <div className="review__user-box">
              <p className="review__user--name">Mary Thomas</p>
              <p className="review__user-date">Sept 19, 2021</p>
            </div>
            <div className="review__rating">7.8</div>
          </figcaption>
        </figure>

        <button className="btn-inline">
          Show All
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  )
}

export default Details