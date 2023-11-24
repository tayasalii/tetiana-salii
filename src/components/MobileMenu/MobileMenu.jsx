'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';

import { BurgerBtn } from '../ui-kit/BurgerBtn';
import { NavBar } from '../NavBar';

import CloseIcon from 'public/icons/close.svg';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  return (
    <>
      <BurgerBtn openMenu={openMenu} />

      <Dialog open={isMenuOpen} onClose={closeMenu}>
        <div className="fixed w-full h-[400px] inset-0 flex items-center justify-start bg-ui_purple text-white">
          <Dialog.Panel className="px-4 md:px-[32px]">
            <NavBar mode="menu" />

            <button
              onClick={closeMenu}
              className="w-[50px] h-[50px] absolute left-0 top-0 flex items-center justify-center"
            >
              <CloseIcon className="w-3 h-3 fill-white" />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
