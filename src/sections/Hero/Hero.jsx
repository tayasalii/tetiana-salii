import Image from 'next/image';

import { Container } from '@/components/Container';
import { TitulusList } from '@/components/TitulusList/TitulusList';

import hero from '@/data/hero.json';

import portret from 'public/images/main-photo.jpg';

export const Hero = () => {
  return (
    <section className="pt-6 pb-[95px] md:pt-[84px] md:pb-[130px] xl:pt-[91px] xl:pb-[150px] min-h-[787px] md:min-h-[891px] xl:min-h-[812px]">
      <Container className="md:grid md:grid-auto-row-5 md:grid-cols-2 xl:grid-auto-row-4 xl:grid-cols-[800px_1fr]">
        <p className="mb-4 md:mb-[63px] xl:mb-10 text-ui_m_h2 md:text-ui_t_h2 xl:text-ui_d_h2 underline underline-offset-8 md:underline-offset-[12px] xl:underline-offset-[20px] decoration-ui_purple decoration-1 mdOnly:col-span-2">
          {hero.hello}
        </p>

        <Image
          className="smOnly:mb-5 w-64 md:w-[302px] xl:w-[400px] mx-auto mdOnly:self-end xl:row-span-4 xl:ml-auto xl:mr-0"
          src={portret}
          alt="Портрет Тетяни Салій"
          priority
        />

        <h1 className="text-ui_m_h1 md:text-ui_t_h1 xl:text-ui_d_h1 smOnly:w-[280px] mb-2 md:mb-8 xl:mb-4 md:col-start-1 md:row-start-2 mdOnly:col-span-2">
          {hero.myNameIs}
          <span className="text-ui_purple whitespace-nowrap">
            {hero.tetiana}
          </span>
          {hero.andI}
        </h1>

        <TitulusList
          titulus={hero.titulus}
          className="mb-5 md:mb-10 md:col-start-1 md:row-start-3"
        />
      </Container>
    </section>
  );
};
