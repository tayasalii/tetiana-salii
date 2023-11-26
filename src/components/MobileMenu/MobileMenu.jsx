import PropTypes from 'prop-types';

import { BaseModal } from '../ui-kit/BaseModal';
import { NavBar } from '../NavBar';
import { ContactList } from '../ContactsList';
import { SocialBar } from '../SocialBar';

export const MobileMenu = ({ isMenuOpen, closeMenu }) => {
  return (
    <BaseModal
      isOpen={isMenuOpen}
      closeModal={closeMenu}
      dialogClassName="xl:hidden"
      overlayClassName="bg-black/25"
      modalClassName="smOnly:w-screen h-[606px] md:h-[400px] md:tabletWidth px-4 pt-[50px] md:px-[32px]  md:ml-auto bg-ui_purple text-white "
      containerClassName="smOnly:px-4 max-w-[480px] h-full mx-auto flex flex-col items-start"
      closeBtnClassName="right-0 md:right-[-15px] top-[-35px] text-white"
    >
      <NavBar mode="menu" />

      <ContactList className="w-full mb-16 menuUnderline md:hidden" />

      <SocialBar mode="menu" />
    </BaseModal>
  );
};

MobileMenu.proptypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
