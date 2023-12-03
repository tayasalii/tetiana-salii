import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Stats } from '@/sections/Stats';
import { Container } from '@/components/Container';
import { MainButton } from '@/components/ui-kit/MainButton';
import { BaseVioletBlock } from '@/components/ui-kit/BaseVioletBlock';
import { HeroModal } from '@/components/ui-kit/HeroModal';

import btns from '@/data/buttons.json';

export default async function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />

      <h1>EXAMPLES:</h1>

      <MainButton linkData={btns.connectWithWhatsapp} />
      <MainButton linkData={btns.connectWithTelegram} />
      <MainButton linkData={btns.details} />
      <MainButton linkData={btns.moreFeedback} />
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
