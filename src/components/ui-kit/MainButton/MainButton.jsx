'use client';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

import buttonsData from '@/data/buttons.json';

import TelegramIcon from 'public/icons/telegram.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import WhatsappIcon from 'public/icons/whatsapp.svg';
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {form && (
        <div className={classNames('relative w-[256px] h-[68px]', className)}>
          <button
            type="submit"
            tabIndex={tabindex}
            className={classNames(
              'mainLink font-ui_garamond formSubmitBtn z-[1] flex items-center justify-center gap-[10px]',
              { ['bg-gray-400']: disabled },
            )}
            disabled={disabled}
          >
            <span className="z-[1] text-ui_t_m_body2 xl:text-ui_d_body2 font-ui_garamond">
              {buttonsData.button.title}
            </span>
            <TelegramIcon className="w-[25px] h-[22px] z-[1]" />
          </button>

          <div className="absolute w-[256px] h-[68px] top-0">
            <ShortColoredEllipse className="absolute coloredForDarkBg stroke-white" />
            <ShortWhiteEllipse className="absolute stroke-white" />
          </div>
        </div>
      )}

      {linkData && !form && (
        <>
          {isClient ? (
            <div
              className={classNames(
                'relative h-[68px] rounded-full',
                {
                  'w-[256px]': !isDesktop,
                  'w-[290px]': isDesktop,
                },
                className,
              )}
            >
              <a
                href={linkData.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={classNames(
                  'flex items-center justify-center gap-[6px] text-ui_purple mainLink',
                  {
                    'h-[68px] w-[256px]': !isDesktop,
                    'h-[68px] w-[290px]': isDesktop,
                  },
                )}
              >
                <span className="z-[2] text-ui_t_m_body2 xl:text-ui_d_body2">
                  {' '}
                  {linkData.title}
                </span>

                {linkData.icon === 'telegram' && (
                  <TelegramIcon className="w-[25px] h-[22px] z-[2]" />
                )}
                {linkData.icon === 'instagram' && (
                  <InstagramIcon className="w-[22px] h-[22px] z-[2]" />
                )}
                {linkData.icon === 'whatsapp' && (
                  <WhatsappIcon className="w-[22px] h-[22px] z-[2]" />
                )}
              </a>

              {isDesktop && (
                <div className="absolute z-[-1] h-[68px] w-[290px] top-0">
                  <LongColoredEllipse className="z-[-1] w-[290px] absolute coloredForLightBg stroke-ui_purple" />
                  <LongWhiteEllipse className="absolute w-[290px] stroke-ui_purpleLight" />
                </div>
              )}

              {!isDesktop && (
                <div className="absolute z-[-1] h-[68px] w-[256px] top-0">
                  <ShortColoredEllipse className="z-[-1] absolute w-[256px] h-[68px] coloredForLightBg stroke-ui_purple" />
                  <ShortWhiteEllipse className="absolute w-[256px] h-[68px] stroke-ui_purpleLight" />
                </div>
              )}
            </div>
          ) : (
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

                {linkData.icon === 'telegram' && (
                  <TelegramIcon className="w-[25px] h-[22px] z-[2]" />
                )}
                {linkData.icon === 'instagram' && (
                  <InstagramIcon className="w-[22px] h-[22px] z-[2]" />
                )}
                {linkData.icon === 'whatsapp' && (
                  <WhatsappIcon className="w-[22px] h-[22px] z-[2]" />
                )}
              </a>
              <div className="absolute z-[-1] h-[68px] w-[256px] top-0">
                <ShortColoredEllipse className="z-[-1] absolute w-[256px] h-[68px] coloredForLightBg stroke-ui_purple" />
                <ShortWhiteEllipse className="absolute w-[256px] h-[68px] stroke-ui_purpleLight" />
              </div>
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
