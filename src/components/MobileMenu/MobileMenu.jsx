'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { NavBar } from '../NavBar';
import { ContactList } from '../ContactsList';
import { SocialBar } from '../SocialBar';

import CloseIcon from 'public/icons/close.svg';

export const MobileMenu = ({ isMenuOpen, closeMenu }) => {
  return (
    <>
      <Transition appear show={isMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={isMenuOpen}
          onClose={closeMenu}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="px-4 pt-[50px] md:px-[32px] w-screen h-[606px] md:h-[400px] md:max-w-[271px] md:ml-auto bg-ui_purple text-white">
                  <div className="relative smOnly:px-4 max-w-[480px] h-full mx-auto flex flex-col items-start">
                    <NavBar mode="menu" />

                    <ContactList className="w-full mb-16 menuUnderline md:hidden" />

                    <SocialBar mode="menu" />

                    <button
                      onClick={closeMenu}
                      className="w-[50px] h-[50px] absolute right-[5px] md:right-[-15px] top-[-35px] flex items-center justify-center"
                    >
                      <CloseIcon className="w-5 h-5 fill-white" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
