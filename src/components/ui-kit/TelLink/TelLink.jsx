import classNames from 'classnames';
import PropTypes from 'prop-types';

import TelIcon from 'public/icons/phone.svg';

export const TelLink = ({ isNumberVisible = true, isBanner = false }) => {
  return (
    <a
      href="tel:+380964044006"
      className="flex gap-3 xl:gap-2 items-center xl:relative xl:after:absolute xl:after:bottom-[-4px] xl:after:w-full xl:after:h-[3px] xl:after:bg-transparent xl:hover:after:bg-ui_purpleLight xl:focus:after:bg-ui_purpleLight xl:after:transitioned"
    >
      <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-ui_purpleLight xl:bg-transparent xl:w-max xl:h-max">
        <TelIcon
          className={classNames(
            'white-stroke w-[35px] h-[35px] xl:w-7 xl:h-7',
            {
              'xl:stroke-ui_dark xl:stroke-2': isBanner,
            },
          )}
        />
      </div>

      {isNumberVisible && (
        <span className="text-ui_t_m_body2 xl:text-ui_d_body2">
          38(096) 404-40-06
        </span>
      )}
    </a>
  );
};

TelLink.propTypes = {
  isNumberVisible: PropTypes.bool,
  isBanner: PropTypes.bool,
};
