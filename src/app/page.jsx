import { NavBar } from '@/components/NavBar/NavBar';
import { Hero } from '@/sections/Hero';
import MailIcon from '../../public/icons/mail.svg';
import { Logo } from '@/components/ui-kit/Logo';

export default async function Home() {
  return (
    <>
      <Logo isFooter />

      <Hero />

      <NavBar mode="menu" />

      <MailIcon
        width="24"
        height="24"
        className="stroke-ui_purple hover:stroke-ui_purpleLight"
      />
    </>
  );
}
