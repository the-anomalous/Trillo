/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Icon from '../../assets/sprite.svg'

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${Icon}#icon-home`} ></use>
            </svg>
            <span>Home</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${Icon}#icon-aircraft-take-off`} ></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${Icon}#icon-key`} ></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${Icon}#icon-map`} ></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">
        &copy; 2022 Trillo All Rights Reserved
      </div>
    </nav>
  )
}

export default Sidebar