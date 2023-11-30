'use client';

import { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';

import ArrowIcon from 'public/icons/accordion-arrow.svg';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRef = useRef(null);

  const onTitleClick = index => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      const el = itemRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY;
        let scrollOffset = 0;
        if (window.innerWidth <= 767) {
          scrollOffset = 72;
        } else if (window.innerWidth <= 1279) {
          scrollOffset = 120;
        } else {
          scrollOffset = 0;
        }

        const topPosition = rect.top + scrollTop - scrollOffset;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
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
              className={`cursor-pointer w-full flex justify-between items-center gap-2 py-[18px] px-4 transition duration-300 ease-in ${
                isActive
                  ? 'text-white bg-ui_purpleLight'
                  : 'text-ui_dark bg-white border-b border-b-ui_purpleLight'
              }`}
              onClick={() => onTitleClick(index)}
              type="button"
            >
              <span className="flex gap-[7px] font-ui_montserrat text-ui_t_body1 text-left">
                <span className="inline-block">{index + 1}. </span>
                <span className="inline-block">{title}</span>
              </span>
              <ArrowIcon className="w-3 h-3 shrink-0" />
            </button>

            <div
              className={`subItem box-content overflow-hidden transition-all duration-500 ${
                isActive
                  ? 'py-5 px-[18px] border-r border-r-ui_purple border-l border-l-ui_purple border-b border-b-ui_purple'
                  : 'p-0'
              }`}
            >
              <Markdown>{description}</Markdown>

              <div className="flex gap-2">
                <p>Вартість:</p>
                <Markdown>{price}</Markdown>
              </div>

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
