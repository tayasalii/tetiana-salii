'use client';

import { useState } from 'react';

import { MobileMenu } from '@/components/MobileMenu';

import BurgerIcon from 'public/icons/burger.svg';

export const BurgerBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  return (
    <>
      <button
        type="button"
        aria-label="відкрити мобільне меню"
        onClick={openMenu}
        className="h-[50px] w-[50px] notXl:relative notXl:right-[-9px] flex justify-center items-center md:ml-auto xl:hidden"
      >
        <BurgerIcon className="stroke-white w-[32px] h-5" />
      </button>

      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};
