'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = ({ slidesInfo }) => {
  return (
    <Swiper
      className="sliderSwiper"
      modules={[Keyboard, Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      grabCursor={true}
      lazyPreloadPrevNext={1}
    >
      {slidesInfo.map((slide, index) => (
        <SwiperSlide key={index} style={{ display: 'flex' }}>
          <Image
            src={slide.src}
            alt={slide.alt}
            width={400}
            height={324}
            className="w-auto h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slider.proptypes = {
  slidesInfo: PropTypes.arrayOf({
    src: PropTypes.string,
    alt: PropTypes.string,
    priority: PropTypes.number,
  }),
};
