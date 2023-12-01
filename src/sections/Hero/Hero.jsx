import Image from 'next/image';

import { Container } from '@/components/Container';
import { MainButton } from '@/components/ui-kit/MainButton';
import { TitulusList } from '@/components/TitulusList/TitulusList';

import portret from 'public/images/main-photo.jpg';
import phrases from '@/data/randomPhrases.json';
import btns from '@/data/buttons.json';

export const Hero = () => {
  return (
    <section className="pt-6 pb-[95px] md:pt-[84px] md:pb-[130px] xl:pt-[91px] xl:pb-[150px]">
      <Container className="md:grid md:grid-auto-row-5 md:grid-cols-2 xl:grid-auto-row-4 xl:grid-cols-[800px_1fr]">
        <p className="mb-[35px] md:mb-[73px] text-ui_m_h2 md:text-ui_t_h2 xl:text-ui_d_h2 underline underline-offset-8 md:underline-offset-[12px] xl:underline-offset-[20px] decoration-ui_purple decoration-1 mdOnly:col-span-2">
          {phrases.hero.hello}
        </p>

        <Image
          className="smOnly:mb-5 w-64 md:w-[302px] xl:w-[400px] mx-auto mdOnly:self-end xl:row-span-4 xl:ml-auto xl:mr-0"
          src={portret}
          alt="Портрет Тетяна Салій"
        />

        <h1 className="text-ui_m_h1 md:text-ui_t_h1 xl:text-ui_d_h1 smOnly:w-[280px] mb-3 md:mb-10 xl:mb-8 md:col-start-1 md:row-start-2 mdOnly:col-span-2">
          {phrases.hero.myNameIs}
          <span className="text-ui_purple whitespace-nowrap">
            {phrases.hero.tetiana}
          </span>
          {phrases.hero.andI}
        </h1>

        <TitulusList
          titulus={phrases.hero.titulus}
          className="mb-5 md:mb-10 md:col-start-1 md:row-start-3"
        />

        <div className="smOnly:mx-auto smOnly:w-max xl:row-start-4">
          <MainButton linkData={btns.connectWithWhatsapp} variant="short" />
        </div>
      </Container>
    </section>
  );
};
