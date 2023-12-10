'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { BaseModal } from '../BaseModal';

export const FormModal = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <BaseModal
      isOpen={isModalOpen}
      closeModal={closeModal}
      modalClassName="w-full smOnly:max-w-[375px] md:w-[645px] h-[270px] mx-auto pt-[90px] md:pt-[80px] bg-white my-auto shadow-ui_darkShadow twoFlowers md:cornerFlower"
      containerClassName="px-4 md:px-8 xl:px-[47px] pb-[90px] md:pb-[90px] md:bottomFlower"
      closeBtnClassName="right-2 md:right-3 top-[-80px] md:top-[-70px]"
      overlayClassName="md:py-10"
    >
      {children}
    </BaseModal>
  );
};

FormModal.proptypes = {
  children: PropTypes.node.isRequired,
};
