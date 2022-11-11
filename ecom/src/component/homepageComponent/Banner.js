// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation,Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css/bundle';

SwiperCore.use([Navigation,Pagination]);

export default function Banner() {
  return (
    <section className="banner-section">
        <Swiper
        navigation
        spaceBetween={50}
        slidesPerView={1}>
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
}