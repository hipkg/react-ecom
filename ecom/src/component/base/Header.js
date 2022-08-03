import React from 'react';
import Search from './Search';
import Flag from './Flag';
import logo from '../../assets/images/logo.png';
import Menu from './Menu'


const Header = () =>{
return (
  <>
  <div className="header-top">
    <div className="container-fluid">
      <ul className="d-flex m-0 justify-content-end align-items-center py-1">
        <li>
          <Flag />
        </li>
        <li className='d-flex align-items-center'>
          <i className="material-symbols-outlined text-white me-2">account_balance_wallet</i>
          <span className='text-white'>Currency</span>
          <select className="form-select p-0 ps-2" aria-label="Default select">
            <option selected>OMR-Omani Rial</option>
            <option value="1">INR-Ruppes</option>
            <option value="2">USD-Dollar</option>
          </select>
        </li>
        <li>
          <a href="Tel:+968 90612612">Welcome to Call Us: +968 90612612</a>
        </li>
      </ul>
    </div>
  </div>
  <header className='navbar'>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src={logo} className="img-fluid" width={200} alt="logo" />
      </a>
      <Search/>
      <div className='header-right ms-auto'>
        <ul className='d-flex m-0'>
          <li className='location-dropdown bg-danger'>
            <i className="material-symbols-outlined me-2 ms-2">location_on</i>
            <select className="form-select" aria-label="Default select example">
              <option selected>Muscat</option>
              <option value="1">Salalah</option>
              <option value="2">Sohar</option>
            </select>
          </li>
          <li className='btn-group login-option'>
            <button type='button' className='btn btn-outline-secondary text-white border-0 dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">Login/Register</button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#action">Action</a></li>
              <li><a className="dropdown-item" href="#anotherAction">Another action</a></li>
              <li><a className="dropdown-item" href="#somethingElseHere">Something else here</a></li>
              <li><a className="dropdown-item" href="#separatedLink">Separated link</a></li>
            </ul>
          </li>
          <li>
          <div className="position-relative cart-icon">
            <i className="material-symbols-outlined">
              shopping_cart
             </i>
            <span className="position-absolute translate-middle badge rounded-pill bg-warning ">
              10
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          
          </li>
        </ul>
      </div>
    </div>
  </header>
  <Menu menuItems={['same day',"birthday","flowers","cakes","chocolates","sweets","perfumes","gifts","occassions","browse by brand"]}/>
  </>
  )
}
export default Header;