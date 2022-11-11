import React from 'react';
import Homepage from './component/Homepage';
import './assets/scss/main.scss';
import Header from './component/base/Header';
import Footer from './component/base/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './component/Categorypage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="category" element={<Category />} />
            <Route path="buynow" element={<div className='d-flex justify-content-center align-items-center' style={{height:"45.8vh"}}><img src="https://media0.giphy.com/media/uZ7wLTpoMbtikW2wUY/giphy.gif" alt="Cart Emoji" height={"200px"} /><h1>Buy Now</h1></div>} />
            <Route path="*" element={<div className='d-flex justify-content-center align-items-center' style={{height:"45.8vh"}}><h1> <img src="https://acegif.com/wp-content/uploads/2022/4hv9xm/crying-emoji-9.gif" alt="Crying Emoji" height={"100px"} /> Page Not Found</h1></div>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
