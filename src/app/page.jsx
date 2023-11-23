import { Hero } from '@/sections/Hero';
import { NavBar } from '@/components/NavBar/NavBar';
import { ContactList } from '@/components/ContactsList/ContactsList';

import MailIcon from 'public/icons/mail.svg';

export default async function Home() {
  return (
    <>
      <Hero />
      <NavBar mode="menu" />
      <MailIcon width="24" height="24" className="purple-stroke" />
      <ContactList />
    </>
  );
}
