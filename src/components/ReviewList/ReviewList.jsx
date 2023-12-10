'use client';
import { useState, useEffect, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Spinner } from '../ui-kit/Spinner';
import { Slider } from './Slider';

export const ReviewList = ({ slidesInfo }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isToDesktop = useMediaQuery({ maxWidth: 1279 });

  const [isLoadind, setIsLoading] = useState(true);

  useEffect(() => {
    if (isDesktop) {
      setIsLoading(false);
    }
    if (isToDesktop) {
      setIsLoading(false);
    }
  }, [isDesktop, isToDesktop]);

  return (
    <Fragment>
      {isLoadind && (
        <div className="flex justify-center items-center h-[397px] md:h-[354px] xl:h-[567px]">
          <Spinner className="border-white" />
        </div>
      )}
      {isToDesktop && <Slider slidesInfo={slidesInfo} />}
      {isDesktop && (
        <ul className="review-list">
          {slidesInfo
            .sort((a, b) => a.priority - b.priority)
            .map((slide, index) => (
              <li key={index}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={295}
                  height={322}
                  className="w-auto h-auto"
                />
              </li>
            ))}
        </ul>
      )}
    </Fragment>
  );
};

ReviewList.proptypes = {
  slidesInfo: PropTypes.arrayOf({
    src: PropTypes.string,
    alt: PropTypes.string,
    priority: PropTypes.number,
  }),
};
