import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MainButton } from '@/components/ui-kit/MainButton';

import txt from '@/data/form.json';

export const Form = ({ className = '' }) => {
  return (
    <div
      className={classNames(
        'bg-ui_purple smOnly:px-4 pt-[26px] pb-8 md:py-10',
        className,
      )}
    >
      <h3 className="smOnly:w-[270px] m-auto mb-3 text-center text-white md:mb-6 text-ui_m_description md:text-ui_t_description2 xl:text-ui_d_description2 xl:mb-5">
        {txt.title}
      </h3>

      <p className="mb-[30px] md:mb-7 mdOnly:w-[540px] text-center text-white text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 font-ui_montserrat xl:w-[604px] md:mx-auto">
        {txt.description}
      </p>

      <form className="mb-16 md:mb-[45px] xl:mb-10 flex flex-col gap-7 md:gap-8 md:w-[604px] md:mx-auto">
        <input
          className="field field_one-row pt-[26px]"
          type="text"
          placeholder={txt.name}
        />
        <input
          className="field field_one-row pt-[26px]"
          type="tel"
          placeholder={txt.phone}
        />
        <textarea
          className="field h-[70px] pt-[50px] md:pt-[66px] md:h-[87px] resize-none"
          placeholder={txt.message}
        />
      </form>
      <MainButton className="m-auto" form />
    </div>
  );
};

Form.proptypes = {
  className: PropTypes.string,
};
