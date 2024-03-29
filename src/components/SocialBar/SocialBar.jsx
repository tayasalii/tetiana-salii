import PropTypes from 'prop-types';
import classNames from 'classnames';

import { SocialLink } from '@/components/ui-kit/SocialLink';

import socialLinks from '@/data/socialLinks.json';

export const SocialBar = ({ mode, className }) => {
  return (
    <ul
      className={classNames(
        'flex',
        {
          'smOnly:flex-col gap-5': mode === 'footer',
          'smOnly:hidden xl:ml-auto gap-[6px] relative md:left-[-9px] xl:left-[9px]':
            mode === 'header',
          'md:hidden gap-[6px] relative left-[2px]': mode === 'menu',
        },
        className,
      )}
    >
      {socialLinks.map((link, index) => (
        <li key={index}>
          <SocialLink dataLink={link} isRound={mode === 'footer'} />
        </li>
      ))}
    </ul>
  );
};

SocialBar.propTypes = {
  mode: PropTypes.oneOf(['header', 'footer', 'menu']).isRequired,
  className: PropTypes.string,
};
