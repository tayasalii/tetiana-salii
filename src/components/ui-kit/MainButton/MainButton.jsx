import PropTypes from 'prop-types';
import classNames from 'classnames';

import buttonsData from '@/data/buttons.json';

import TelegramIcon from 'public/icons/telegram.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import WhatsappIcon from 'public/icons/whatsapp.svg';
import ShortColoredEllipse from 'public/icons/short-colored-ellipse.svg';
import ShortWhiteEllipse from 'public/icons/short-white-ellipse.svg';
import LongColoredEllipse from 'public/icons/long-colored-ellipse.svg';
import LongWhiteEllipse from 'public/icons/long-white-ellipse.svg';

export const MainButton = ({ form = false, linkData, variant = 'long' }) => {
  return (
    <>
      {form && (
        <div className="relative w-[256px] h-[68px] mt-10">
          <button
            type="submit"
            className="mainLink formSubmitBtn z-[2] flex items-center justify-center gap-[10px]"
          >
            <span className="z-[2]">{buttonsData.button.title}</span>
            <TelegramIcon className="w-[25px] h-[22px] z-[2]" />
          </button>

          <div className="absolute z-[-1] w-[256px] h-[68px] top-0">
            <ShortColoredEllipse className="z-[-1] absolute coloredForDarkBg stroke-white" />
            <ShortWhiteEllipse className="absolute stroke-white" />
          </div>
        </div>
      )}

      {linkData && !form && (
        <div
          className={classNames('relative h-[68px] mt-10 rounded-full', {
            'w-[256px]': variant === 'short',
            'w-[290px]': variant === 'long',
          })}
        >
          <a
            href={linkData.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={classNames(
              'flex items-center justify-center gap-[6px] text-ui_purple mainLink',
              {
                'h-[68px] w-[256px]': variant === 'short',
                'h-[68px] w-[290px]': variant === 'long',
              },
            )}
          >
            <span className="z-[2]"> {linkData.title}</span>

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

          {variant === 'long' && (
            <div className="absolute z-[-1] h-[68px] w-[290px] top-0">
              <LongColoredEllipse className="z-[-1] w-[290px] absolute coloredForLightBg stroke-ui_purple" />
              <LongWhiteEllipse className="absolute w-[290px] stroke-ui_purpleLight" />
            </div>
          )}

          {variant === 'short' && (
            <div className="absolute z-[-1] h-[68px] w-[256px] top-0">
              <ShortColoredEllipse className="z-[-1] absolute w-[256px] h-[68px] coloredForLightBg stroke-ui_purple" />
              <ShortWhiteEllipse className="absolute w-[256px] h-[68px] stroke-ui_purpleLight" />
            </div>
          )}
        </div>
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
  variant: PropTypes.oneOf(['short', 'long']),
};
