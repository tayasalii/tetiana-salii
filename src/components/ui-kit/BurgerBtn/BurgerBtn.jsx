import PropTypes from 'prop-types';

import BurgerIcon from 'public/icons/burger.svg';

export const BurgerBtn = ({ openMenu }) => {
  return (
    <button
      type="button"
      onClick={openMenu}
      className="h-[50px] w-[50px] smOnly:relative smOnly:right-[-9px] flex justify-center items-center md:ml-auto xl:hidden"
    >
      <BurgerIcon className="stroke-white w-[32px] h-5" />
    </button>
  );
};

BurgerBtn.propTypes = {
  openMenu: PropTypes.func.isRequired,
};
