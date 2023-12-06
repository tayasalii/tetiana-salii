import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import classNames from 'classnames';

export const BaseVioletBlock = ({ mode, children, className = '' }) => {
  return (
    <div
      className={classNames('bg-ui_purple xl:py-[70px]', {
        'py-10': mode === 'hero',
        'pt-10 pb-6 md:py-[56px] md:overflow-hidden xl:pt-[70px] xl:pb-[54px]':
          mode === 'about',
      })}
    >
      <Container className={className}>{children}</Container>
    </div>
  );
};

BaseVioletBlock.proptypes = {
  mode: PropTypes.oneOf(['about', 'hero']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
