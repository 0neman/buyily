import React from 'react';
import './Header.css';
import logo from './assets/BuyiLy.svg'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header() {
  return (
    <div className='header'>

        <div className='header__top'>
            <MenuRoundedIcon/>
            <img src={logo} alt="" />
            <AccountCircleOutlinedIcon/>
        </div>

        <div className='header__bottom'>
            <div className='header__option'> <h3>Home</h3> </div> 
            <div className='header__option'> <h3>Categories</h3> </div> 
            <div className='header__option'> <h3>Favourite</h3> </div>
            <div className='header__option'> <h3>Sell</h3>  </div>
        </div>
      
    </div>
  )
}

export default Header

