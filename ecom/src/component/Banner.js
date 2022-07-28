// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation,Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css/bundle';
import banner from '../assets/images/CakeBanner.jpg';

SwiperCore.use([Navigation,Pagination]);

export default () => {
  return (
    <section className="banner-section">
        <Swiper
        navigation
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <div className='banner-warrper' style={{background:'url(https://www.giftsonclick.com/media/wysiwyg/flowers-banner-PINK.png)'}}>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner-warrper' style={{background:'url(https://www.giftsonclick.com/media/wysiwyg/cake-banner-01.png)'}}>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner-warrper' style={{background:'url(https://www.giftsonclick.com/media/wysiwyg/combos-banner.png)'}}>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};