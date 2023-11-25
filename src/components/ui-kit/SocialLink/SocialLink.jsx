import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ICONS } from '@/components/ui-kit/ICONS';

export const SocialLink = ({ dataLink: { href, title }, isRound }) => {
  const Icon = ICONS[title];

  return (
    <a
      href={href}
      className={classNames(
        'w-[45px] h-[45px] flex items-center justify-center text-white focus:outline-ui_purpleLight group',
        {
          'transitioned rounded-full bg-ui_purpleLight focus:bg-white focus:text-ui_purpleLight  hover:bg-white hover:text-ui_purpleLight':
            isRound,
        },
      )}
      rel="nofollow noreferrer noopener"
      target="_blank"
      aria-label={`Посилання на ${title}`}
    >
      <div
        className={classNames('overflow-visible', {
          'xl:relative xl:after:absolute xl:after:bottom-[-10px] xl:after:w-full xl:after:h-[3px]  xl:group-focus:after:bg-ui_purpleLight xl:group-hover:after:bg-ui_purpleLight xl:after:transitioned':
            !isRound,
        })}
      >
        <Icon width="auto" height={23} />
      </div>
    </a>
  );
};

SocialLink.propTypes = {
  dataLink: PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  isRound: PropTypes.bool,
};
