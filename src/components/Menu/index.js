import './Menu.css'
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom';

import React from 'react';

const Menu = () => {
  return (
    <div className='menu'>
      <a className='social' href="#">
      <BsYoutube size={24} color='#FFF'/>
      </a>
      <a className='social' href="#">
      <BsInstagram size={24} color='#FFF'/>
      </a>
      <Link  className='menu-item' to='/links'>Meus Links</Link>
    </div>
  );
};

export default Menu;
