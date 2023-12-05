import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Logo = ({ isFooter = false, className = '' }) => {
  return (
    <Link href="/" aria-label="логотип" className={className}>
      <Image
        alt="логотип"
        src="/images/logo.png"
        priority
        width={220}
        height={80}
        className={classNames('w-[165px] h-[60px] md:w-[220px] md:h-[80px]', {
          'w-[165px] h-[60px] md:w-[192px] md:h-[70px] xl:w-[250px] xl:h-[92px]':
            isFooter,
        })}
      />
    </Link>
  );
};

Logo.propTypes = {
  isFooter: PropTypes.bool,
  className: PropTypes.string,
};
