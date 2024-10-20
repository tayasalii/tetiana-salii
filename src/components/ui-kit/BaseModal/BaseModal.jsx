'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CloseIcon from 'public/icons/close.svg';

export const BaseModal = ({
  isOpen,
  closeModal,
  children,
  modalClassName,
  dialogClassName = '',
  overlayClassName = '',
  containerClassName = '',
  closeBtnClassName = '',
  closeBtnAria = 'закрити модальне вікно',
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={classNames('relative z-10', dialogClassName)}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-100 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-100 opacity-0"
          >
            <div className="fixed inset-0 z-30 bg-ui_overlay" />
          </Transition.Child>

          <div
            className={classNames(
              'fixed inset-0 overflow-y-auto z-30',
              overlayClassName,
            )}
          >
            <div className="flex min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Dialog.Panel className={modalClassName}>
                  <div
                    className={classNames(
                      'relative h-full',
                      containerClassName,
                    )}
                  >
                    {children}
                    <button
                      type="button"
                      aria-label={closeBtnAria}
                      onClick={closeModal}
                      className={classNames(
                        'w-[50px] h-[50px] absolute flex items-center justify-center',
                        closeBtnClassName,
                      )}
                    >
                      <CloseIcon className="w-4 h-4 fill-current" />
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

BaseModal.proptypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  modalClassName: PropTypes.string.isRequired,
  dialogClassName: PropTypes.string,
  overlayClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  closeBtnClassName: PropTypes.string,
  closeBtnAria: PropTypes.string,
};
