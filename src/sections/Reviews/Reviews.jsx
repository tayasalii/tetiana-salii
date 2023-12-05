'use client';
import { Container } from '@/components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper';
import slidesInfo from '@/data/slides.json';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Reviews = () => {
  return (
    <section>
      <Container>
        <h2>Відгуки про консультації та навчання</h2>
      </Container>

      <div className=" reviewBg  bg-no-repeat bg-cover bg-center pt-[50px]  h-[377px] md:h-[390px] xl:bg-[length:1440px] xl:h-[667px] pb-5 xl:py-[50px] ">
        <Container>
          <Swiper
            style={{
              '--swiper-navigation-color': '#3C4563',
              '--swiper-navigation-size': '16px',
            }}
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
          >
            {slidesInfo.map((slide, index) => (
              <SwiperSlide key={index} style={{ display: 'flex' }}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={320}
                  height={195}
                  className="w-auto h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </section>
  );
};
