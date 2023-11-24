import { ContactList } from '@/components/ContactsList';
import { NavBar } from '../NavBar';

export const Banner = () => {
  return (
    <div className="flex py-4 smOnly:hidden">
      <div className="xl:mr-[235px]">
        <NavBar mode="banner" />
      </div>
      <div className="w-full">
        <ContactList isBanner />
      </div>
    </div>
  );
};
