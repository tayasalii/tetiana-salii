import PropTypes from 'prop-types';

import { NavLink } from '../ui-kit/NavLink';

import navlinks from '@/data/navigation.json';
import classNames from 'classnames';

export const NavBar = ({ mode }) => {
  const getNeededLinks = () => {
    if (mode === 'header') {
      navlinks.splice(2, 1);
      navlinks.splice(3, 1);
      return navlinks;
    } else if (mode === 'banner') {
      const newArr = navlinks.slice(2);
      newArr.splice(1, 1);
      return newArr;
    } else {
      return navlinks;
    }
  };

  const getStyles = classNames({
    'flex flex-col gap-8 mr-auto md:gap-10': mode === 'menu',
    'flex flex-col md:flex-row xl:flex-col gap-5 text-end md:gap-10 md:mr-auto xl:text-start xl:gap-4':
      mode === 'footer',
    'flex flex-row gap-10': mode === 'header',
    'flex flex-row gap-10 max-xl:hidden': mode === 'banner',
  });

  return (
    <ul className={getStyles}>
      {getNeededLinks().map((link, index) => (
        <li key={index}>
          <NavLink dataLink={link} />
        </li>
      ))}
    </ul>
  );
};

NavBar.propTypes = {
  mode: PropTypes.oneOf(['header', 'banner', 'menu', 'footer']).isRequired,
};
