import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';
import { BurgerBtn } from '@/components/ui-kit/BurgerBtn';
import { Logo } from '@/components/ui-kit/Logo';
import { TelLink } from '@/components/ui-kit/TelLink';

export const Header = () => {
  return (
    <header className="bg-ui_purple text-white py-[10px] md:py-[5px] h-20 md:h-[90px]">
      <Container className="flex justify-between items-center md:justify-end notXl:flex-row-reverse xl:flex-row">
        <BurgerBtn />
        <NavBar mode="header" />

        <Logo className="md:ml-11 xl:ml-[78px]" />

        <TelLink isNumberVisible={false} className="md:hidden" />
        <p className="smOnly:hidden xl:ml-auto">
          Socials Socials Socials Socials
        </p>
      </Container>
    </header>
  );
};
