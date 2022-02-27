import React from 'react'
import Icon from '../../assets/sprite.svg'

const Header = () => {
  return (
    <div className='header' >
      <div className="logo">
        <img src={require('../../assets/logo.png')} alt="trillo logo" className='logo__image' />
      </div>

      <form action="#" className="search">
        <input type="text" className="search__box" placeholder='Search...' />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref={`${Icon}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className='user-nav__icon'>
            <use xlinkHref={`${Icon}#icon-bookmark`}></use>
          </svg>
          <span className="user-nav__notification">7</span>
        </div>

        <div className="user-nav__icon-box">
          <svg className='user-nav__icon'>
            <use xlinkHref={`${Icon}#icon-chat`}></use>
          </svg>
          <span className="user-nav__notification">13</span>
        </div>

        <div className="user-nav__user">
          <img src={require('../../assets/user.jpg')} alt="user" className='user-nav__user--img' />
          <span className="user-nav__user--username">Aditya</span>
        </div>
      </nav>
    </div>
  )
}

export default Header