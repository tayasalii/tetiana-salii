import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Spinner = ({ className = '' }) => {
  return (
    <div
      className={classNames(
        'w-[60px] h-[25px] grid rounded-full border-[2px] border-ui_purpleLight custom-loader',
        className,
      )}
    ></div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};
