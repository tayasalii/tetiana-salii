'use client';

import { useState, useEffect, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { HeroModal } from '@/components/ui-kit/HeroModal';
import { Spinner } from '../ui-kit/Spinner';
import { MainButton } from '../ui-kit/MainButton';

import btns from '@/data/buttons.json';

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
      {previewArray ? (
        <>
          <ul
            className={classNames(
              'font-ui_montserrat text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 grid grid-col-1 gap-[1px] md:gap-2',
              className,
            )}
          >
            {previewArray.map((title, idx, arr) => (
              <Fragment key={idx}>
                {arr.length - 1 === idx && (
                  <li className="relative smOnly:h-[25px] md:min-h-[22px] pl-[31px] before:absolute before:left-0 before:top-0 before:content-sparkle text-left whitespace-normal">
                    {title}
                    <HeroModal
                      className="ml-[10px] md:ml-3 h-auto"
                      list={restOfArray}
                    />
                  </li>
                )}

                {arr.length - 1 > idx && (
                  <li className="relative flex items-center smOnly:h-[25px] md:min-h-[22px] pl-[31px] before:absolute before:left-0 before:top-0 before:content-sparkle text-left !whitespace-normal">
                    <span>{title}</span>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>

          <div className="smOnly:mx-auto smOnly:w-max xl:row-start-4">
            <MainButton linkData={btns.connectWithWhatsapp} variant="short" />
          </div>
        </>
      ) : (
        <div className="min-h-[170px] md:min-h-[416px] xl:min-h-[308px] smOnly:flex md:grid items-center justify-center md:col-start-1 md:row-start-3">
          <Spinner />

          <ul className="visually-hidden">
            {titulus.map((title, idx) => (
              <li key={idx}>{title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

TitulusList.propTypes = {
  titulus: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};
