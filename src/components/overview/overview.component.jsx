import React from 'react'
import Icon from '../../assets/sprite.svg'

const Overview = () => {
  return (
    <>
      <div className="gallery">
        <figure className="gallery__item">
          <img src={require('../../assets/hotel-1.jpg')} alt="hotel 1" className="gallery__photo" />
        </figure>

        <figure className="gallery__item">
          <img src={require('../../assets/hotel-2.jpg')} alt="hotel 2" className="gallery__photo" />
        </figure>

        <figure className="gallery__item">
          <img src={require('../../assets/hotel-3.jpg')} alt="hotel 3" className="gallery__photo" />
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">
          Hotel Las Palmas
        </h1>

        <div className="overview__stars">
          <svg className="overview__stars--icon">
            <use xlinkHref={`${Icon}#icon-star`}></use>
          </svg>
          <svg className="overview__stars--icon">
            <use xlinkHref={`${Icon}#icon-star`}></use>
          </svg>
          <svg className="overview__stars--icon">
            <use xlinkHref={`${Icon}#icon-star`}></use>
          </svg>
          <svg className="overview__stars--icon">
            <use xlinkHref={`${Icon}#icon-star`}></use>
          </svg>
          <svg className="overview__stars--icon">
            <use xlinkHref={`${Icon}#icon-star`}></use>
          </svg>
        </div>

        <div className="overview__location">
          <svg className="overview__location--icon">
            <use xlinkHref={`${Icon}#icon-location-pin`}></use>
          </svg>
          <button className="btn-inline">
            Madrid, Spain
          </button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating--avg">8.6</div>
          <div className="overview__rating--votes">429 Votes</div>
        </div>
      </div>
    </>
  )
}

export default Overview