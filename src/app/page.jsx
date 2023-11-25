import { Hero } from '@/sections/Hero';

import { Logo } from '@/components/ui-kit/Logo';
import { NavBar } from '@/components/NavBar/NavBar';
import { SocialBar } from '@/components/SocialBar';

export default async function Home() {
  return (
    <>
      <Logo isFooter />
      <Hero />
      <NavBar mode="menu" />
      <SocialBar mode="footer" />
    </>
  );
}
