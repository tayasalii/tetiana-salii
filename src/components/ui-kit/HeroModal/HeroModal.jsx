'use client';

import { useState } from 'react';

import { BaseModal } from '../BaseModal';

export const HeroModal = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal}>
        Відкрити модалку
      </button>

      <BaseModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalClassName="w-full smOnly:max-w-[480px] md:w-[605px] xl:w-[645px] h-[760px] md:h-[540px] xl:h-[614px] mx-auto pt-[52px] md:pt-[72px] xl:pt-[70px] topFlower bg-white my-auto shadow-ui_darkShadow"
        containerClassName="px-4 md:px-8 xl:px-[47px] pb-[52px] md:pb-[72px] xl:pb-[70px] bottomFlower"
        closeBtnClassName="right-[22px] top-0"
      >
        {children}
      </BaseModal>
    </>
  );
};
