import React from 'react';
import Search from './Search';
import Flag from './Flag';
import logo from '../../assets/images/logo.png';


const Header = () =>{
return (
  <>
  <div className="header-top">
    <div className="container-fluid">
      <ul className="d-flex m-0 justify-content-end align-items-center py-1">
        <li className='me-2'>
          <Flag />
        </li>
        <li className='d-flex align-items-center'>
          <i className="material-symbols-outlined text-white me-2">account_balance_wallet</i>
          <span className='text-white me-2'>Currency</span>
          <select className="form-select py-0" aria-label="Default select example">
            <option selected>OMR-OMANI RIAL</option>
            <option value="1">INR-RUPPES</option>
            <option value="2">USD-DOLLAR</option>
          </select>
        </li>
        <li className='ms-2'>
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
            <i class="material-symbols-outlined me-2 ms-2">location_on</i>
            <select class="form-select" aria-label="Default select example">
              <option selected>Muscat</option>
              <option value="1">Salalah</option>
              <option value="2">Sohar</option>
            </select>
          </li>
          <li className='btn-group login-option'>
            <button type='button' className='btn btn-outline-secondary text-white border-0 dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">Login/Register</button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </li>
          <li>
          <div class="position-relative cart-icon">
            <i class="material-symbols-outlined">
              shopping_cart
             </i>
            <span class="position-absolute translate-middle badge rounded-pill bg-warning ">
              10
              <span class="visually-hidden">unread messages</span>
            </span>
          </div>
          
          </li>
        </ul>
      </div>
    </div>
  </header>
  </>
  )
}
export default Header;