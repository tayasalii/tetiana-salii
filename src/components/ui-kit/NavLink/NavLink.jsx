'use client';

import PropTypes from 'prop-types';
import { Link as LinkScroll } from 'react-scroll';

import { useWindowWidth } from '@/hooks/useWindowWidth';

export const NavLink = ({ dataLink: { href, type, title }, handleClick }) => {
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  return (
    <>
      {type === 'anchor' ? (
        <LinkScroll
          onClick={() => handleClick && handleClick()}
          spy={true}
          smooth={true}
          offset={
            isScreenMobile
              ? -80
              : isScreenTablet
              ? -150
              : isScreenDesktop
              ? -155
              : ''
          }
          duration={500}
          to={href}
          href={`#${href}`}
          className="font-ui_garamond text-ui_t_m_body2 xl:text-ui_d_body2 purpleUnderline whitespace-nowrap"
        >
          {title}
        </LinkScroll>
      ) : (
        <a
          href={href}
          className="font-ui_garamond text-ui_t_m_body2 xl:text-ui_d_body2 purpleUnderline whitespace-nowrap"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          {title}
        </a>
      )}
    </>
  );
};

NavLink.propTypes = {
  dataLink: PropTypes.shape({
    href: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['anchor', 'link']).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
