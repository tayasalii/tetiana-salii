'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

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
        onClick={openMenu}
        className="h-[50px] w-[50px] notXl:relative notXl:right-[-9px] flex justify-center items-center md:ml-auto xl:hidden"
      >
        <BurgerIcon className="stroke-white w-[32px] h-5" />
      </button>

      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

BurgerBtn.propTypes = {
  openMenu: PropTypes.func.isRequired,
};
