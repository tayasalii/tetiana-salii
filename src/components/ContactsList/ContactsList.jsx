import classNames from 'classnames';
import PropTypes from 'prop-types';

import { TelLink } from '../ui-kit/TelLink';

import contacts from '@/data/contacts.json';

import MailIcon from 'public/icons/mail.svg';

export const ContactList = ({ isBanner = false, className = '' }) => {
  const emailData = contacts.find(({ id }) => id === 'email');

  return (
    <ul
      className={classNames('flex', className, {
        'flex-row-reverse items-center justify-between': isBanner,
        'flex-col gap-3 md:gap-4 xl:gap-3': !isBanner,
      })}
    >
      <li>
        <TelLink isBanner={isBanner} />
      </li>

      <li>
        <a
          href={emailData.href}
          className={classNames(
            'contactLink h-7 xl:h-8 smOnly:pl-[9px] xl:pl-0 gap-2',
            {
              'md:pl-[9px]': !isBanner,
              'md:pl-0': isBanner,
            },
          )}
        >
          <MailIcon
            className={classNames('white-stroke w-6 h-6 xl:w-7 xl:h-7', {
              'md:stroke-ui_dark md:stroke-2': isBanner,
            })}
          />

          <span
            className={classNames('text-ui_t_m_body2 xl:text-ui_d_body2 ', {
              'text-ui_dark': isBanner,
              'text-white': !isBanner,
            })}
          >
            {emailData.content}
          </span>
        </a>
      </li>
    </ul>
  );
};

ContactList.propTypes = {
  isBanner: PropTypes.bool,
  className: PropTypes.string,
};
