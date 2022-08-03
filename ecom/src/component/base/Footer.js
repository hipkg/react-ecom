import React from 'react';

const Footer = () =>{
return (
  <footer className='pt-4 px-5 bg-dark'>
    <div className="container">
      <ul>
        <li>
          <span className='text-uppercase text-secondary'>My account</span>
          <a href="/">Register</a>
          <a href="/">Login</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <span className='text-uppercase text-secondary'>why we choose</span>
          <a href="/">Privacy Policies</a>
          <a href="/">Term Of Use</a>
          <a href="/">Shipping Policies</a>
          <a href="/">Blog</a>
          <a href="/">Testimonials</a>
          <a href="/">FAQ</a>
        </li>
        <li>
          <span className='text-uppercase text-secondary'>Best Sellers categories</span>
          <a href="/">Flowers</a>
          <a href="/">Cakes</a>
          <a href="/">Chocolates</a>
          <a href="/">Same Day Delivery</a>
          <a href="/">Sweeets</a>
        </li>
        <li>
          <span className='text-uppercase text-secondary'>subscribe</span>
          <p>The good stuff in your inbox News & Email,Offers,Updates</p>
          <form action="/">
            <input type="text" placeholder='Enter Email Id' />
            <input type="submit" value="Submit >" />
          </form>
          <ul className='icons mt-5 p-0'>
            <li><a href="/"><img src={require('../../assets/images/icon/facebook.png')} alt="facebook" className='img-fluid'/></a></li>
            <li><a href="/"><img src={require('../../assets/images/icon/linkedin.png')} alt="facebook" className='img-fluid'/></a></li>
            <li><a href="/"><img src={require('../../assets/images/icon/twitter.png')} alt="facebook" className='img-fluid'/></a></li>
          </ul>
        </li>
      </ul>
    </div>
    <hr />
    <div className="bottom-footer">
        <div className="container">
        <div className="row justify-content-between align-items-center">
          <p>&copy; 2021 - 22 <strong>giftsonclick</strong> All right reserved</p>
          <p className='d-flex align-items-center'>
            <div className='image-wrapper'>
              <img src={require('../../assets/images/icon/visa-logo-2.jpg')} alt="visa"  className='img-fluid'/>
            </div>
            <div className='image-wrapper'>
              <img src={require('../../assets/images/icon/mastercard.png')} alt="visa"  className='img-fluid'/>
            </div>
            <div className='image-wrapper'>
              <img src={'https://gumlet.assettype.com/theceo/import/2020/03/goDaddy-web-hosting-banner.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max'} alt="visa"  className='img-fluid'/>
            </div>
          </p>
        </div>
        </div>
      </div>
  </footer>
  )
}
export default Footer;