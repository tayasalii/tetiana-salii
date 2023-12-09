'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { Container } from '@/components/Container';
import { MainButton } from '@/components/ui-kit/MainButton';

import slidesInfo from '@/data/slides.json';
import btns from '@/data/buttons.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Reviews = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <section className="section">
      <Container>
        <h2 className="section-heading">
          Відгуки про консультації та навчання
        </h2>
      </Container>

      <div className="reviewBg bg-no-repeat bg-cover bg-center py-5  h-[397px] md:h-[414px] md:py-[30px] xl:bg-[length:1440px] xl:h-[667px]  xl:py-[50px]">
        <Container>
          {isDesktop && (
            <ul className="review-list">
              {slidesInfo
                .sort((a, b) => a.priority - b.priority)
                .map((slide, index) => (
                  <li key={index}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={295}
                      height={322}
                      className="w-auto h-auto"
                    />
                  </li>
                ))}
            </ul>
          )}
          {!isDesktop && (
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
          )}
        </Container>
      </div>
      <Container>
        <MainButton linkData={btns.moreFeedback} className="mx-auto mt-10" />
      </Container>
    </section>
  );
};
