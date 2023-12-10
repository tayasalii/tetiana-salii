'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/bootstrap.css';

import { MainButton } from '@/components/ui-kit/MainButton';
import { formValidationSchema } from '@/utils/formValidationSchema';
import { sendFormDataToChat } from '@/utils/sendFormDataToChat';

import txt from '@/data/form.json';
import { FormModal } from '../ui-kit/FormModal';

export const Form = ({ className = '' }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSendingError, setIsSendingError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const STORAGE_KEY = 'feedbackForm';
  const schema = formValidationSchema();

  const {
    control,
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
        className="flex flex-col md:w-[604px] md:mx-auto gap-y-7 md:gap-y-8"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate="noValidate"
      >
        <div className="relative">
          <input
            className={classNames('field field_one-row pt-[26px]', {
              ['border-ui_red border-[1px]']: errors?.name,
            })}
            type="text"
            placeholder={txt.name}
            {...register('name')}
          />
          {errors?.name && <p className="error">{errors?.name?.message}</p>}
        </div>

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <PhoneInput
                country={'ua'}
                excludeCountries={['ru']}
                localization={{ ua: 'Україна' }}
                inputProps={{
                  className: classNames('field field_one-row pl-[99px]', {
                    ['border-ui_red border-[1px]']: errors?.phone,
                  }),
                  placeholder: '+380',
                }}
                {...field}
              />
              {errors?.phone && (
                <p className="error">{errors?.phone?.message}</p>
              )}
            </div>
          )}
        />

        <div className="relative h-min">
          <textarea
            className={classNames(
              'field h-[70px] pt-[50px] md:pt-[66px] md:h-[87px] resize-none block',
              {
                ['border-ui_red border-[1px]']: errors?.message,
              },
            )}
            placeholder={txt.message}
            {...register('message')}
          />
          {errors?.message && (
            <p className="error">{errors?.message?.message}</p>
          )}
        </div>

        <MainButton
          className="m-auto mt-9 md:mt-[13px] xl:mt-2"
          form
          disabled={isSubmitting}
        />
      </form>

      {isSuccess && !isSubmitting && (
        <FormModal>
          <p className="msgTitle">{txt.successTitle}</p>
          <p className="msg mb-3">{txt.successMsgR1}</p>
          <p className="msg">{txt.successMsgR2}</p>
        </FormModal>
      )}

      {isSendingError && !isSubmitting && (
        <FormModal>
          <p className="msgTitle">{txt.errorTitle}</p>
          <p className="msg mb-3">{txt.errorMsgR1}</p>
          <p className="msg">{txt.errorMsgR2}</p>
        </FormModal>
      )}
    </div>
  );
};

Form.proptypes = {
  className: PropTypes.string,
};
