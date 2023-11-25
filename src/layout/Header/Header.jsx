import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';
import { SocialBar } from '@/components/SocialBar';
import { BurgerBtn } from '@/components/ui-kit/BurgerBtn';
import { Logo } from '@/components/ui-kit/Logo';
import { TelLink } from '@/components/ui-kit/TelLink';

export const Header = () => {
  return (
    <header className="fixed z-10 left-0 top-0 w-full h-20 md:h-[90px] py-[10px] md:py-[5px] bg-ui_purple text-white border-b border-b-white shadow-ui_headerShadow">
      <Container className="flex items-center justify-between md:justify-end notXl:flex-row-reverse xl:flex-row">
        <BurgerBtn />
        <NavBar mode="header" />

        <Logo className="md:ml-11 xl:ml-[78px]" />

        <TelLink isNumberVisible={false} className="md:hidden" />
        <SocialBar mode="header" />
      </Container>
    </header>
  );
};
