'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BaseModal } from '../BaseModal';

import hero from '@/data/hero.json';

export const HeroModal = ({ children, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <button
        className={classNames('relative', className)}
        type="button"
        onClick={openModal}
      >
        <span className="absolute top-[-18px] text-ui_purple font-ui_montserrat text-base font-medium underline underline-offset-2 decoration-1 whitespace-nowrap">
          {hero.more}
        </span>
      </button>

      <BaseModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalClassName="w-full smOnly:max-w-[480px] md:w-[605px] xl:w-[645px] h-[760px] md:h-[540px] xl:h-[614px] mx-auto pt-[52px] md:pt-[72px] xl:pt-[70px] topFlower bg-white my-auto shadow-ui_darkShadow"
        containerClassName="px-4 md:px-8 xl:px-[47px] pb-[52px] md:pb-[72px] xl:pb-[70px] bottomFlower"
        closeBtnClassName="right-[22px] top-0"
        overlayClassName="md:py-10"
      >
        {children}
      </BaseModal>
    </>
  );
};

HeroModal.proptypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
