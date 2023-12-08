'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MainButton } from '@/components/ui-kit/MainButton';
import { formValidationSchema } from '@/utils/formValidationSchema';
import { sendFormDataToChat } from '@/utils/sendFormDataToChat';

import txt from '@/data/form.json';
import { FormModal } from '../ui-kit/FormModal';

export const Form = ({ className = '' }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSendingError, setIsSendingError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const STORAGE_KEY = 'contactForm';
  const schema = formValidationSchema();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  });

  const onSubmitHandler = async (data, e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsSendingError(false);

    return await sendFormDataToChat(
      data,
      setIsSendingError,
      setIsSuccess,
      reset,
    ).finally(() => {
      setIsSubmitting(false);
    });
  };

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

      <form
        className=" flex flex-col md:w-[604px] md:mx-auto"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate="noValidate"
      >
        <div className="relative">
          <input
            className="mb-7 md:mb-8 field field_one-row pt-[26px]"
            type="text"
            placeholder={txt.name}
            {...register('name')}
          />
          {errors?.name && (
            <p className="border-ui_red border-[1px] bg-white">
              {errors?.name?.message}
            </p>
          )}
        </div>

        <div>
          <input
            className="mb-7 md:mb-8 field field_one-row pt-[26px]"
            type="tel"
            placeholder={txt.phone}
            {...register('phone')}
          />
          {errors?.phone && (
            <p className="border-ui_red border-[1px] bg-white">
              {errors?.phone?.message}
            </p>
          )}
        </div>

        <textarea
          className="mb-16 md:mb-[45px] xl:mb-10 field h-[70px] pt-[50px] md:pt-[66px] md:h-[87px] resize-none"
          placeholder={txt.message}
          {...register('message')}
        />
        {errors?.message && (
          <p className="border-ui_red border-[1px] bg-white">
            {errors?.message?.message}
          </p>
        )}

        <MainButton className="m-auto" form disabled={isSubmitting} />
      </form>

      {isSuccess && !isSubmitting && <FormModal>Thanks!</FormModal>}

      {isSendingError && !isSubmitting && <FormModal>Error!</FormModal>}
    </div>
  );
};

Form.proptypes = {
  className: PropTypes.string,
};
