import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Stats } from '@/sections/Stats';
import { AboutME } from '@/sections/AboutMe';
import { Feedback } from '@/sections/Feedback/Feedback';

export default async function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutME />
      <Services />
      <Feedback />
    </>
  );
}
