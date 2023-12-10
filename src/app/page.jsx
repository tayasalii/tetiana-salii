import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Stats } from '@/sections/Stats';
import { Reviews } from '@/sections/Reviews';
import { AboutME } from '@/sections/AboutMe';
import { Feedback } from '@/sections/Feedback/Feedback';

export default async function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutME />
      <Reviews />
      <Services />
      <Feedback />
    </>
  );
}
