import { ExampleSection } from '@/sections/ExampleSection';
import { Hero } from '@/sections/Hero';

export default async function Home() {
  return (
    <>
      <Hero />

      <ExampleSection />
    </>
  );
}
