'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { ButtonIcon } from '../ButtonIcon';
import buttonsData from '@/data/buttons.json';

import TelegramIcon from 'public/icons/telegram.svg';
import ShortColoredEllipse from 'public/icons/short-colored-ellipse.svg';
import ShortWhiteEllipse from 'public/icons/short-white-ellipse.svg';
import LongColoredEllipse from 'public/icons/long-colored-ellipse.svg';
import LongWhiteEllipse from 'public/icons/long-white-ellipse.svg';

export const MainButton = ({
  form = false,
  linkData,
  tabindex = 0,
  className = '',
}) => {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const dimensionsStyles = {
    'w-[253px] h-[59px]': !isDesktop,
    'w-[290px] h-[68px]': isDesktop,
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {form && (
        <>
          {isClient && (
            <div
              className={classNames('relative', dimensionsStyles, className)}
            >
              <button
                type="submit"
                tabIndex={tabindex}
                className={classNames(
                  'mainLink font-ui_garamond z-[2] flex items-center justify-center gap-[10px]',
                  dimensionsStyles,
                )}
              >
                <span className="z-[2] text-ui_t_m_body2 xl:text-ui_d_body2 font-ui_garamond">
                  {buttonsData.button.title}
                </span>
                <TelegramIcon className="w-[25px] h-[22px] z-[2]" />
              </button>

              {isDesktop && (
                <div
                  className={classNames(
                    'absolute z-[-1] top-0',
                    dimensionsStyles,
                  )}
                >
                  <LongColoredEllipse className="z-[-1] absolute coloredForDarkBg stroke-white" />
                  <LongWhiteEllipse className="absolute stroke-white" />
                </div>
              )}

              {!isDesktop && (
                <div
                  className={classNames(
                    'absolute z-[-1] top-0',
                    dimensionsStyles,
                  )}
                >
                  <ShortColoredEllipse className="z-[-1] absolute coloredForDarkBg" />
                  <ShortWhiteEllipse className="absolute" />
                </div>
              )}
            </div>
          )}
        </>
      )}

      {linkData && !form && (
        <>
          {isClient && (
            <div
              className={classNames(
                'relative rounded-full',
                dimensionsStyles,
                className,
              )}
            >
              <a
                href={linkData.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={classNames(
                  'flex items-center justify-center gap-[6px] text-ui_purple mainLink',
                  dimensionsStyles,
                )}
              >
                <span className="z-[2] text-ui_t_m_body2 xl:text-ui_d_body2">
                  {' '}
                  {linkData.title}
                </span>

                <ButtonIcon icon={linkData.icon} />
              </a>

              {isDesktop && (
                <div
                  className={classNames(
                    'absolute z-[-1] top-0',
                    dimensionsStyles,
                  )}
                >
                  <LongColoredEllipse className="z-[-1] absolute coloredForLightBg stroke-ui_purple" />
                  <LongWhiteEllipse className="absolute" />
                </div>
              )}

              {!isDesktop && (
                <div
                  className={classNames(
                    'absolute z-[-1] top-0',
                    dimensionsStyles,
                  )}
                >
                  <ShortColoredEllipse className="z-[-1] absolute coloredForLightBg" />
                  <ShortWhiteEllipse className="absolute" />
                </div>
              )}
            </div>
          )}

          {!isClient && (
            <div
              className={classNames('relative w-[256px] h-[68px] rounded-full')}
            >
              <a
                href={linkData.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={classNames(
                  'flex h-[68px] w-[256px] items-center justify-center gap-[6px] font-ui_garamond text-ui_purple mainLink',
                )}
              >
                <span className="z-[2] font-ui_garamond text-ui_t_m_body2 xl:text-ui_d_body2 ">
                  {' '}
                  {linkData.title}
                </span>

                <ButtonIcon icon={linkData.icon} />
              </a>

              {isDesktop && (
                <div
                  className={classNames(
                    'absolute z-[-1] top-0',
                    dimensionsStyles,
                  )}
                >
                  <LongColoredEllipse className="z-[-1] absolute coloredForLightBg stroke-ui_purple" />
                  <LongWhiteEllipse className="absolute" />
                </div>
              )}

              {!isDesktop && (
                <div
                  className={classNames(
                    'absolute z-[-1] top-0',
                    dimensionsStyles,
                  )}
                >
                  <ShortColoredEllipse className="z-[-1] absolute coloredForLightBg" />
                  <ShortWhiteEllipse className="absolute" />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

MainButton.proptypes = {
  form: PropTypes.bool,
  linkData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
  tabindex: PropTypes.oneOf([0, 1]),
  className: PropTypes.string,
};
