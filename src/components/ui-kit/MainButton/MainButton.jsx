import PropTypes from 'prop-types';

import buttonsData from '@/data/buttons.json';

import TelegramIcon from 'public/icons/telegram.svg';

export const MainButton = ({ form = false, linkData, children }) => {
  return (
    <>
      {form && (
        <button
          type="submit"
          className="formSubmitBtn flex items-center justify-center mt-10 gap-[10px]"
        >
          {buttonsData.button.title}
          <TelegramIcon className="w-[25px] h-[22px]" />
        </button>
      )}

      {linkData && !form && (
        <a
          href={linkData.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center h-[65px] w-[287px] mt-10 gap-[6px] text-ui_purple"
        >
          {linkData.title}
          {children}
        </a>
      )}
    </>
  );
};

MainButton.proptypes = {
  form: PropTypes.bool,
  linkData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  variant: PropTypes.oneOf(['short', 'long']),
};
