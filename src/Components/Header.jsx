import React from 'react';
import logo from '../assets/logo2.png';
import './Header.css'


const Header = () => {
  return (
    <div>
      <nav>
            <img src={logo} alt="" />
        <ul>
            <li><a href="/"><i className='bx bx-home-alt-2'></i> TRANG CHỦ</a></li>
            <li><a href="2"><i className='bx bx-category'></i> GIỚI THIỆU</a></li>
            <li><a href="#"><i className='bx bx-user-voice'></i> DỊCH VỤ</a></li>
            <li><a href="#"><i className='bx bx-building-house'></i> DỰ ÁN</a></li>
            <li><a href="#"><i className='bx bx-user'></i> KHÁCH HÀNG</a></li>
        </ul>
      </nav>
    </div>
  );    

}

export default Header;
