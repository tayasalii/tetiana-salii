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
  disabled = 'false',
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
              className={classNames(
                'relative mx-auto',
                dimensionsStyles,
                className,
              )}
            >
              <button
                type="submit"
                className={classNames(
                  'relative mainLink font-ui_garamond z-[1] flex items-center justify-center gap-[10px]',
                  dimensionsStyles,
                  { ['bg-gray-400']: disabled },
                )}
                disabled={disabled}
              >
                <span className="z-[1] text-ui_t_m_body2 xl:text-ui_d_body2 font-ui_garamond">
                  {buttonsData.button.title}
                </span>
                <TelegramIcon className="w-[25px] h-[22px] z-[1]" />
              </button>

              {isDesktop && (
                <div className={classNames('absolute top-0', dimensionsStyles)}>
                  <LongColoredEllipse className="absolute coloredForDarkBg stroke-white" />
                  <LongWhiteEllipse className="absolute stroke-white" />
                </div>
              )}

              {!isDesktop && (
                <div className={classNames('absolute top-0', dimensionsStyles)}>
                  <ShortColoredEllipse className="absolute coloredForDarkBg" />
                  <ShortWhiteEllipse className="absolute" />
                </div>
              )}
            </div>
          )}

          {!isClient && (
            <div
              className={classNames(
                'relative mx-auto',
                dimensionsStyles,
                className,
              )}
            >
              <button
                type="submit"
                className={classNames(
                  'relative mainLink font-ui_garamond z-[1] flex items-center justify-center gap-[10px]',
                  dimensionsStyles,
                  { ['bg-gray-400']: disabled },
                )}
                disabled={disabled}
              >
                <span className="z-[1] text-ui_t_m_body2 xl:text-ui_d_body2 font-ui_garamond">
                  {buttonsData.button.title}
                </span>
                <TelegramIcon className="w-[25px] h-[22px] z-[1]" />
              </button>

              {isDesktop && (
                <div className={classNames('absolute top-0', dimensionsStyles)}>
                  <LongColoredEllipse className="absolute coloredForDarkBg stroke-white" />
                  <LongWhiteEllipse className="absolute stroke-white" />
                </div>
              )}

              {!isDesktop && (
                <div className={classNames('absolute top-0', dimensionsStyles)}>
                  <ShortColoredEllipse className="absolute coloredForDarkBg" />
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
                'relative rounded-full mx-auto',
                dimensionsStyles,
                className,
              )}
            >
              <a
                href={linkData.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                tabIndex={tabindex}
                className={classNames(
                  'flex items-center justify-center gap-[6px] text-ui_purple mainLink relative z-[2]',
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
                <div className={classNames('absolute top-0', dimensionsStyles)}>
                  <LongColoredEllipse className="absolute coloredForLightBg stroke-ui_purple" />
                  <LongWhiteEllipse className="absolute" />
                </div>
              )}

              {!isDesktop && (
                <div className={classNames('absolute top-0', dimensionsStyles)}>
                  <ShortColoredEllipse className="absolute coloredForLightBg" />
                  <ShortWhiteEllipse className="absolute" />
                </div>
              )}
            </div>
          )}

          {!isClient && (
            <div
              className={classNames(
                'relative rounded-full mx-auto',
                dimensionsStyles,
                className,
              )}
            >
              <a
                href={linkData.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                tabIndex={tabindex}
                className={classNames(
                  'flex items-center justify-center gap-[6px] font-ui_garamond text-ui_purple mainLink relative z-[2]',
                  dimensionsStyles,
                )}
              >
                <span className="z-[2] font-ui_garamond text-ui_t_m_body2 xl:text-ui_d_body2 ">
                  {' '}
                  {linkData.title}
                </span>

                <ButtonIcon icon={linkData.icon} />
              </a>

              {isDesktop && (
                <div className={classNames('absolute top-0', dimensionsStyles)}>
                  <LongColoredEllipse className="absolute coloredForLightBg stroke-ui_purple" />
                  <LongWhiteEllipse className="absolute" />
                </div>
              )}

              {!isDesktop && (
                <div className={classNames('absolute top-0', dimensionsStyles)}>
                  <ShortColoredEllipse className="absolute coloredForLightBg" />
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
  disabled: PropTypes.bool,
};
