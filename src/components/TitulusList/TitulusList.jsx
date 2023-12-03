'use client';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { HeroModal } from '@/components/ui-kit/HeroModal';

export const TitulusList = ({ titulus, className = '' }) => {
  const [isClient, setIsClient] = useState(null);
  const [previewArray, setPreviewArray] = useState(null);
  const [restOfArray, setRestOfArray] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // setAmountOfList(isDesktop ? 9 : isTablet ? 12 : 4);
    if (!isClient) return;

    if (isDesktop) {
      setPreviewArray(titulus.slice(0, 9));
      setRestOfArray(titulus.slice(9));
    } else if (isTablet) {
      setPreviewArray(titulus.slice(0, 12));
      setRestOfArray(titulus.slice(12));
    } else {
      setPreviewArray(titulus.slice(0, 4));
      setRestOfArray(titulus.slice(4));
    }
  }, [isClient, isDesktop, isTablet, titulus]);

  return (
    <>
      {previewArray && (
        <ul
          className={classNames(
            'font-ui_montserrat text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 grid grid-col-1 gap-[6px]',
            className,
          )}
        >
          {previewArray.map((title, idx, arr) => (
            <>
              {arr.length - 1 === idx && (
                <li
                  key={idx}
                  className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left hitespace-normal"
                >
                  {title}
                  <HeroModal className="ml-[10px] md:ml-3" list={restOfArray} />
                </li>
              )}

              {arr.length - 1 > idx && (
                <li
                  key={idx}
                  className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left !whitespace-normal"
                >
                  {title}
                </li>
              )}
            </>
          ))}
        </ul>
      )}

      {!isClient && <p>Loading...</p>}

      {/* {!isClient && (
        <ul
          className={classNames(
            'font-ui_montserrat text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 grid grid-col-1 gap-[6px]',
            className,
          )}
        >
          {titulus.slice(0, 4).map((title, idx, arr) => (
            <>
              {arr.length - 1 === idx && (
                <li
                  key={idx}
                  className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left hitespace-normal"
                >
                  {title}
                  <HeroModal
                    className="ml-[10px] md:ml-3"
                    list={titulus.slice(4)}
                  />
                </li>
              )}

              {arr.length - 1 > idx && (
                <li
                  key={idx}
                  className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left !whitespace-normal"
                >
                  {title}
                </li>
              )}
            </>
          ))}
        </ul>
      )} */}
    </>
  );
};

TitulusList.propTypes = {
  titulus: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};
