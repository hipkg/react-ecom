import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation,Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css/bundle';

SwiperCore.use([Navigation,Pagination]);

export default function Feadback() {
  return (
    <section className="feedback px-5 py-4">
      <div className="container-fluid p-0">
        <div className="d-flex">
          <h1 className='fw-normal py-2 text-capitalize '>Our Happy Customer</h1>
        </div>
        <div className="row">
        <Swiper
        navigation
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <div className="card p-2">
            <div className="card-header bg-white border-0">
              <div className="image-wrapper">
                <img src={require('../assets/images/icon/avtar.jpg')} alt="avtar"  className='img-fluid'/>
              </div>
              <div className="px-3">
                <div className='text-truncate fw-bold'>Kanye West</div>
                <p className='text-secondary'>24<sup>th</sup> Aug</p>
                <div className='rating'>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                </div>
              </div>
              <div className="facebook-icon">
                <img src={require('../assets/images/icon/facebook.png')} alt="facebook" className='img-fluid' />
              </div>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aliquam.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-2">
            <div className="card-header bg-white border-0">
              <div className="image-wrapper">
                <img src={require('../assets/images/icon/avtar.jpg')} alt="avtar"  className='img-fluid'/>
              </div>
              <div className="px-3">
                <div className='text-truncate fw-bold'>Kanye West</div>
                <p className='text-secondary'>24<sup>th</sup> Aug</p>
                <div className='rating'>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                </div>
              </div>
              <div className="facebook-icon">
                <img src={require('../assets/images/icon/facebook.png')} alt="facebook" className='img-fluid' />
              </div>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aliquam.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-2">
            <div className="card-header bg-white border-0">
              <div className="image-wrapper">
                <img src={require('../assets/images/icon/avtar.jpg')} alt="avtar"  className='img-fluid'/>
              </div>
              <div className="px-3">
                <div className='text-truncate fw-bold'>Kanye West</div>
                <p className='text-secondary'>24<sup>th</sup> Aug</p>
                <div className='rating'>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                </div>
              </div>
              <div className="facebook-icon">
                <img src={require('../assets/images/icon/facebook.png')} alt="facebook" className='img-fluid' />
              </div>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aliquam.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-2">
            <div className="card-header bg-white border-0">
              <div className="image-wrapper">
                <img src={require('../assets/images/icon/avtar.jpg')} alt="avtar"  className='img-fluid'/>
              </div>
              <div className="px-3">
                <div className='text-truncate fw-bold'>Kanye West</div>
                <p className='text-secondary'>24<sup>th</sup> Aug</p>
                <div className='rating'>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                </div>
              </div>
              <div className="facebook-icon">
                <img src={require('../assets/images/icon/facebook.png')} alt="facebook" className='img-fluid' />
              </div>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aliquam.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-2">
            <div className="card-header bg-white border-0">
              <div className="image-wrapper">
                <img src={require('../assets/images/icon/avtar.jpg')} alt="avtar"  className='img-fluid'/>
              </div>
              <div className="px-3">
                <div className='text-truncate fw-bold'>Kanye West</div>
                <p className='text-secondary'>24<sup>th</sup> Aug</p>
                <div className='rating'>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                  <i className="material-symbols-outlined text-danger">star</i>
                </div>
              </div>
              <div className="facebook-icon">
                <img src={require('../assets/images/icon/facebook.png')} alt="facebook" className='img-fluid' />
              </div>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aliquam.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </section>
  )
}
