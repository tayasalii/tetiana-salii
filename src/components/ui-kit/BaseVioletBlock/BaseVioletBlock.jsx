import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import classNames from 'classnames';

export const BaseVioletBlock = ({ mode, children }) => {
  return (
    <div
      className={classNames('bg-ui_purple xl:py-[70px]', {
        'py-10': mode === 'hero',
        'pt-10 pb-[110px] md:py-[62px]': mode === 'about',
      })}
    >
      <Container>{children}</Container>
    </div>
  );
};

BaseVioletBlock.proptypes = {
  mode: PropTypes.oneOf(['about', 'hero']).isRequired,
  children: PropTypes.node.isRequired,
};
