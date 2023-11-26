import { ContactList } from '@/components/ContactsList';
import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';
import { SocialBar } from '@/components/SocialBar';
import { Logo } from '@/components/ui-kit/Logo';

export const Footer = () => {
  return (
    <footer className="bg-ui_purple">
      <Container className="py-5 md:pt-8 md:pb-10 xl:pt-10">
        <div className="grid grid-cols-2 grid-auto-rows-4 md:grid-cols-1 md:grid-auto-rows-5 xl:grid-auto-cols-3 xl:grid-auto-rows-3 xl:gap-x-[108px]">
          <Logo
            isFooter
            className="smOnly:col-span-2 mb-[13px] xl:row-span-2"
          />
          <div className="mb-10 xl:mb-12 md:row-start-4 xl:row-start-2 xl:col-start-3">
            <p className="mb-4 text-white xl:mb-5 smOnly:hidden font-ui_montserrat text-ui_t_body1 xl:text-ui_d_body1">
              Шукайте мене у соціальних мережах:
            </p>
            <SocialBar mode="footer" />
          </div>
          <NavBar
            mode="footer"
            className="mb-10 text-white md:row-start-2 md:mb-[50px] xl:row-start-1 xl:col-start-2 xl:row-span-2"
          />
          <div className="mb-10 smOnly:col-span-2 md:mb-[50px]">
            <p className="mb-4 text-white xl:mb-5 smOnly:hidden font-ui_montserrat text-ui_t_body1 xl:text-ui_d_body1">
              Зв’яжіться зі мною будь-яким зручним для Вас способом:
            </p>
            <ContactList />
          </div>
          <p className="text-white font-ui_montserrat text-ui_m_mini md:text-ui_d_t_mini smOnly:col-span-2">
            © 2023 - Тетяна Салій. Усі права захищено
          </p>
        </div>
      </Container>
    </footer>
  );
};
