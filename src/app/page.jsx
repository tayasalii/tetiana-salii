import { Hero } from '@/sections/Hero';
import { Container } from '@/components/Container';
import { Logo } from '@/components/ui-kit/Logo';
import { NavBar } from '@/components/NavBar/NavBar';
import { SocialBar } from '@/components/SocialBar';
import { MainButton } from '@/components/ui-kit/MainButton';
import { BaseVioletBlock } from '@/components/ui-kit/BaseVioletBlock';
import { HeroModal } from '@/components/ui-kit/HeroModal';

export default async function Home() {
  return (
    <>
      <Logo isFooter />
      <Hero />
      <NavBar mode="menu" />
      <SocialBar mode="footer" />

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
