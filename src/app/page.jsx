import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Stats } from '@/sections/Stats';
import { AboutME } from '@/sections/AboutMe';

export default async function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutME />
      <Services />
    </>
  );
}
