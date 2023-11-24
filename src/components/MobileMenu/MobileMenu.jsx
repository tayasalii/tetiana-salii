'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { NavBar } from '../NavBar';

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
            leave="ease-in duration-200"
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
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="px-4 pt-[37px] md:px-[32px] w-screen h-[606px] md:h-[400px] bg-ui_purple text-white">
                  <div className="relative max-w-[343px] md:max-w-[271px] h-full mx-auto flex items-start">
                    <NavBar mode="menu" />

                    <button
                      onClick={closeMenu}
                      className="w-[50px] h-[50px] absolute right-0 top-[-37px] flex items-center justify-center"
                    >
                      <CloseIcon className="w-3 h-3 fill-white" />
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
