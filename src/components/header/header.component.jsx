import React from 'react'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header' >
      <div className="logo">
        <img src={Logo} alt="trillo logo" />
      </div>

      <form action="#" className="search">
        <input type="text" className="search__box" />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref='../../assets/sprite.svg#icon-magnifying-glass'></use>
          </svg>
        </button>
      </form>

      <div className="user-nav__icon-box">
        <svg className='user-nav__icon'>
          <use xlinkHref='../../assets/sprite.svg#icon-bookmark'></use>
        </svg>
        <span className="user-nav__notification">7</span>
      </div>

      <div className="icon-box">
        <svg className='user-nav__icon'>
          <use xlinkHref='../../assets/sprite.svg#icon-chat'></use>
        </svg>
        <span className="user-nav__notification">13</span>
      </div>

      <div className="user-nav__user">
        <svg className='user-nav__icon'>
          <use xlinkHref='../../assets/sprite.svg#icon-bookmark'></use>
        </svg>
        <span className="user-nav__username">aditya</span>
      </div>
    </div>
  )
}

export default Header