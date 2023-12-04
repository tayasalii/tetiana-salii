'use client';
import { useState, useEffect, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { HeroModal } from '@/components/ui-kit/HeroModal';

export const TitulusList = ({ titulus, className = '' }) => {
  const [previewArray, setPreviewArray] = useState(null);
  const [restOfArray, setRestOfArray] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
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
  }, [isDesktop, isTablet, titulus]);

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
            <Fragment key={idx}>
              {arr.length - 1 === idx && (
                <li className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left whitespace-normal">
                  {title}
                  <HeroModal className="ml-[10px] md:ml-3" list={restOfArray} />
                </li>
              )}

              {arr.length - 1 > idx && (
                <li className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left !whitespace-normal">
                  {title}
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      )}

      {!previewArray && (
        <p
          className={classNames(
            'font-ui_montserrat text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 grid grid-col-1 gap-[6px]',
            className,
          )}
        >
          Loading...
        </p>
      )}

      {/* {!isClient && (
        <ul
          className={classNames(
            'font-ui_montserrat text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 grid grid-col-1 gap-[6px]',
            className,
          )}
        >
          {titulus.slice(0, 4).map((title, idx, arr) => (
            <Fragment key={idx}>
              {arr.length - 1 === idx && (
                <li className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left whitespace-normal">
                  {title}
                  <HeroModal
                    className="ml-[10px] md:ml-3"
                    list={titulus.slice(4)}
                  />
                </li>
              )}

              {arr.length - 1 > idx && (
                <li className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left !whitespace-normal">
                  {title}
                </li>
              )}
            </Fragment>
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