import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NavLink } from '@/components/ui-kit/NavLink';

import navlinks from '@/data/navigation.json';

export const NavBar = ({ mode }) => {
  const getNeededLinks = () => {
    if (mode === 'header') {
      const newArr = navlinks.slice(0, 4);
      newArr.splice(2, 1);
      return newArr;
    } else if (mode === 'banner') {
      const newArr = navlinks.slice(2);
      newArr.splice(1, 1);
      return newArr;
    } else {
      return navlinks;
    }
  };

  const getStyles = classNames({
    'flex flex-col gap-8 mr-auto md:gap-10 xl:hidden': mode === 'menu',
    'flex flex-col md:flex-row xl:flex-col gap-5 text-end md:gap-10 md:mr-auto xl:text-start xl:gap-4':
      mode === 'footer',
    'notXl:hidden xl:flex xl:flex-row xl:gap-10': mode === 'header',
    'notXl:hidden flex flex-row gap-10 w-max': mode === 'banner',
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
