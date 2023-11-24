import PropTypes from 'prop-types';
import classNames from 'classnames';

import { SocialLink } from '@/components/ui-kit/SocialLink';

import socialLinks from '@/data/socialLinks.json';

export const SocialBar = ({ mode }) => {
  return (
    <ul
      className={classNames('flex gap-5', {
        'smOnly:flex-col': mode === 'footer',
      })}
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
  mode: PropTypes.oneOf(['header', 'footer']).isRequired,
};
