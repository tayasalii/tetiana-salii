import { ContactList } from '@/components/ContactsList';
import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';
import { SocialBar } from '@/components/SocialBar';
import { Logo } from '@/components/ui-kit/Logo';

import footer from '@/data/footer.json';

export const Footer = () => {
  return (
    <footer className="py-5 bg-ui_purple md:pt-8 md:pb-10 xl:pt-10">
      <Container className="grid grid-cols-2 grid-auto-rows-4 md:grid-cols-1 md:grid-auto-rows-5 xl:grid-cols-[250px_174px_602px] xl:grid-auto-rows-3 xl:gap-x-[108px]">
        <Logo
          isFooter
          className="smOnly:col-span-2 mb-[13px] xl:row-span-2 w-max h-max"
        />

        <NavBar
          mode="footer"
          className="mb-10 text-white smOnly:col-start-2 md:row-start-2 md:mb-[50px] xl:row-start-1 xl:col-start-2 xl:row-span-2"
        />

        <div className="mb-10 smOnly:col-span-2 md:mb-[50px] smOnly:footerUnderline">
          <p className="footerText">{footer.contacts}</p>
          <ContactList />
        </div>

        <div className="mb-10 xl:mb-12 smOnly:row-start-2 md:row-start-4 xl:row-start-2 xl:col-start-3">
          <p className="footerText">{footer.socials}</p>
          <SocialBar mode="footer" />
        </div>

        <p className="text-white font-ui_montserrat text-ui_m_mini md:text-ui_d_t_mini smOnly:col-span-2 xl:col-span-3 footerUnderline">
          {footer.copyRight}
        </p>
      </Container>
    </footer>
  );
};
