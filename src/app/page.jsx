import { Hero } from '@/sections/Hero';
import { Container } from '@/components/Container';
import { MainButton } from '@/components/ui-kit/MainButton';
import { BaseVioletBlock } from '@/components/ui-kit/BaseVioletBlock';
import { HeroModal } from '@/components/ui-kit/HeroModal';
import { AboutME } from '@/sections/AboutMe';

import btns from '@/data/buttons.json';

export default async function Home() {
  return (
    <>
      <Hero />

      <AboutME />

      <MainButton linkData={btns.connectWithWhatsapp} variant="long" />
      <MainButton linkData={btns.connectWithTelegram} variant="long" />
      <MainButton linkData={btns.details} variant="short" />
      <MainButton linkData={btns.moreFeedback} variant="long" />
      <MainButton form />
      <section className="py-10">
        <Container>
          <p>EXAMPLE SECTION</p>
        </Container>

        <BaseVioletBlock mode="about">
          <p>hello</p>
        </BaseVioletBlock>
      </section>
      <HeroModal />
    </>
  );
}
