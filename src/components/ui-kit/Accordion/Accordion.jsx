'use client';

import { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { MainButton } from '../MainButton';

import btns from '@/data/buttons.json';

import ArrowIcon from 'public/icons/accordion-arrow.svg';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRef = useRef(null);

  const onTitleClick = index => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }

    const el = itemRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY;
      // let scrollOffset = 0;
      //     if (window.innerWidth <= 767) {
      //       scrollOffset = 72;
      //     } else if (window.innerWidth <= 1279) {
      //       scrollOffset = 120;
      //     } else {
      //       scrollOffset = 0;
      //     }

      const topPosition = rect.top + scrollTop;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const subItemRefs = itemRef.current.querySelectorAll('.subItem');

    subItemRefs.forEach((subItemRef, index) => {
      if (activeIndex === index) {
        subItemRef.style.maxHeight = subItemRef.scrollHeight + 'px';
      } else {
        subItemRef.style.maxHeight = '0';
      }
    });
  }, [activeIndex]);

  return (
    <ol className="grid gap-y-1" ref={itemRef}>
      {items.map(({ title, price, id, description }, index) => {
        const isActive = index === activeIndex;

        return (
          <li key={id} className="relative z-[1] bg-white">
            <h3 className="visually-hidden">{title}</h3>
            <button
              className={classNames(
                'cursor-pointer w-full flex justify-between items-center gap-2 py-[18px] px-4 xl:pl-[70px] md:pb-5 md:pt-4 xl:pt-[21px] xl:pr-[80px] transition duration-300 ease-in font-ui_montserrat',
                {
                  'text-white bg-ui_purpleLight ': isActive,
                  'text-ui_dark bg-white border-b border-b-ui_purpleLight':
                    !isActive,
                },
              )}
              onClick={() => onTitleClick(index)}
              type="button"
            >
              <span className="flex gap-[7px] text-ui_t_body1 md:text-ui_t_items xl:text-ui_m_quote text-left">
                <span className="inline-block">{index + 1}. </span>
                <span className="inline-block">{title}</span>
              </span>

              <ArrowIcon
                className={classNames(
                  'w-3 h-3 md:w-[18px] md:h-[18px] xl:w-5 xl:h-5 shrink-0',
                  {
                    'text-white rotate-0 transitioned': isActive,
                    'text-ui_dark rotate-180 transitioned': !isActive,
                  },
                )}
              />
            </button>

            <div
              className={classNames(
                'subItem box-content overflow-hidden transition-all duration-500',
                {
                  'py-5 xl:py-8 px-[18px] md:px-[31px] xl:px-[105px] border-r border-r-ui_purple border-l border-l-ui_purple border-b border-b-ui_purple h-auto':
                    isActive,
                  'px-[18px] md:px-[31px] xl:px-[105px] py-0 h-0': !isActive,
                },
              )}
            >
              <Markdown className="!w-full main-prose mobile-prose tablet-prose desktop-prose">
                {description}
              </Markdown>

              <div className="flex gap-2 xl:gap-[10px] mt-3 md:mt-4 xl:mt-5 items-start">
                <p className="text-ui_purple font-ui_garamond text-ui_m_description">
                  Вартість:
                </p>

                <Markdown className="main-prose mobile-prose tablet-prose desktop-prose prose-ul:mt-[-5px] mt-[5px] xl:mt-[2px]">
                  {price}
                </Markdown>
              </div>

              <MainButton linkData={btns.details} className="mx-auto mt-4" />
              {/* <Button tabIdx={isActive ? 0 : -1} /> */}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
