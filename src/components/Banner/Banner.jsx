import { Container } from '../Container';
import { ContactList } from '@/components/ContactsList';
import { NavBar } from '../NavBar';

export const Banner = () => {
  return (
    <div className="py-[5px] xl:py-4 smOnly:hidden bg-white">
      <Container className="flex">
        <NavBar mode="banner" className="xl:mr-[235px]" />

        <ContactList isBanner className="w-full" />
      </Container>
    </div>
  );
};
