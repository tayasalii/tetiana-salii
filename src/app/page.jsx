import { NavBar } from '@/components/NavBar/NavBar';
import { Hero } from '@/sections/Hero';

export default async function Home() {
  return (
    <>
      <Hero />

      <NavBar mode="banner" />
    </>
  );
}
