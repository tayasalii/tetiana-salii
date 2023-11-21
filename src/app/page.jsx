import { Hero } from '@/sections/Hero';
import MailIcon from '../../public/icons/mail.svg';

export default async function Home() {
  return (
    <>
      <Hero />
      <MailIcon
        width="24"
        height="24"
        className="stroke-ui_purple hover:stroke-ui_purpleLight"
      />
    </>
  );
}
