import React from 'react';
import './Header.scss';
import { CiSearch } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart , AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <>
    <div className="header">
      <div className="header__img">
        <img src="https://supro.arrowtheme.com/pub/media/logo/default/logo.png" alt="logo" />
      </div>
      <div className="header__items">
        <ul>
          <li>
            <Link className='link' to="">Home</Link>
          </li>
          {/* <li>
            <Link className='link' to=":id">Detail</Link>
          </li> */}
          <li>
            <Link className='link' to="basket">Basket</Link>
          </li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="header__search">
          <form><input type="text" placeholder='Search entire store here...'/>
          <CiSearch  className="search"/></form>
      </div>
      <div className="header__icons">
        <BsPerson className='icon'/>
        <AiOutlineHeart className='icon'/>
        <HiOutlineShoppingCart className='icon'/>
        <AiOutlineSetting className='icon'/> 
      </div>
    </div>
    <div className='shop'>
      <Link to="basket">
      <HiOutlineShoppingCart className='shopping'/>
      </Link>
    </div>
    </>
  )
}

export default Header