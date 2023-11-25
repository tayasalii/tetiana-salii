import { Container } from '../Container';
import { NavBar } from '../NavBar';
import { SocialBar } from '../SocialBar';
import { BurgerBtn } from '../ui-kit/BurgerBtn';
import { Logo } from '../ui-kit/Logo';
import { TelLink } from '../ui-kit/TelLink';

export const HeaderViolet = () => {
  return (
    <div className="h-20 md:h-[90px] py-[10px] md:py-[5px] bg-ui_purple text-white">
      <Container className="flex items-center justify-between md:justify-end notXl:flex-row-reverse xl:flex-row">
        <BurgerBtn />
        <NavBar mode="header" />

        <Logo className="md:ml-11 xl:ml-[78px]" />

        <TelLink isNumberVisible={false} className="md:hidden" />
        <SocialBar mode="header" />
      </Container>
    </div>
  );
};
