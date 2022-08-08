import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation,Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css/bundle';

SwiperCore.use([Navigation,Pagination]);

export default function Feadback({user}) {
  return (
    <section className="feedback px-5 py-4">
      <div className="container-fluid p-0">
        <h1 className='heading py-2'>Our Happy Customers</h1>
        <div className="row">
        <Swiper
        navigation
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
          {user.map((userInfo)=>{
              return <SwiperSlide>
              <div className="card p-2">
                <div className="card-header bg-white border-0">
                  <div className="image-wrapper">
                    <img src={require(`../assets/images/${userInfo.img}`)} alt="avtar"  className='img-fluid'/>
                  </div>
                  <div className="px-3">
                    <div className='text-truncate fw-bold'>{userInfo.name}</div>
                    <p className=''>{userInfo.date}<sup>th</sup> {userInfo.month}</p>
                    <div className='rating'>
                      <i className="material-symbols-outlined text-danger">star</i>
                      <i className="material-symbols-outlined text-danger">star</i>
                      <i className="material-symbols-outlined text-danger">star</i>
                      <i className="material-symbols-outlined text-danger">star</i>
                      <i className="material-symbols-outlined text-danger">star</i>
                    </div>
                  </div>
                  <a className="facebook-icon" href='https://www.facebook.com' target={'_blank'}>
                    <img src={require('../assets/images/icon/facebook.png')} alt="facebook" className='img-fluid' />
                  </a>
                </div>
                <div className="card-body">{userInfo.feedback}</div>
              </div>
            </SwiperSlide>
          })}
      </Swiper>
        </div>
      </div>
    </section>
  )
}
