import classNames from 'classnames';
import PropTypes from 'prop-types';

import contacts from '@/data/contacts.json';

import TelIcon from 'public/icons/phone.svg';

export const TelLink = ({ isNumberVisible = true, isBanner = false }) => {
  const telData = contacts.find(({ id }) => id === 'tel');

  return (
    <a href={telData.href} className="contactLink">
      <div
        className={classNames(
          'w-[45px] h-[45px] flex items-center justify-center rounded-full bg-ui_purpleLight xl:bg-transparent xl:w-max xl:h-max',
          {
            'w-[50px] h-[50px]': !isNumberVisible,
          },
        )}
      >
        <TelIcon
          className={classNames(
            'white-stroke stroke-2 w-[30px] h-[30px] xl:w-7 xl:h-7',
            {
              'xl:stroke-ui_dark xl:stroke-2': isBanner,
            },
          )}
        />
      </div>

      {isNumberVisible && (
        <span
          className={classNames('text-ui_t_m_body2 xl:text-ui_d_body2', {
            'text-ui_dark': isBanner,
            'text-white': !isBanner,
          })}
        >
          {telData.content}
        </span>
      )}
    </a>
  );
};

TelLink.propTypes = {
  isNumberVisible: PropTypes.bool,
  isBanner: PropTypes.bool,
};
