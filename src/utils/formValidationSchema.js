import * as Yup from 'yup';

import { keepOnlyDigits } from '@/utils/keepOnlyDigits';

const nameRegexp =
  /^[а-яА-Яa-zA-ZіІїЇґҐєЄ]+(([ʼ’'` -][а-яА-Яa-zA-ZіІїЇґҐєЄ ])?[а-яА-Яa-zA-ZіІїЇґҐєЄ]*)*$/;
const phoneRegexp = /^\d{11,12}$/;

export const formValidationSchema = () =>
  Yup.object({
    name: Yup.string()
      .trim()
      .required("* Ім'я обов'язкове")
      .min(3, "* Ім'я має містити не менше 3 символів")
      .max(70, "* Ім'я має містити не більше 70 символів")
      .matches(nameRegexp, '* Допускаються літери, пробіл, апостроф та тире'),

    phone: Yup.string()
      .required("* Телефон обов'язковий")
      .test('phone', '* Телефон має містити від 11 до 12 цифр', value => {
        const digitsOnly = keepOnlyDigits(value);
        return phoneRegexp.test(digitsOnly);
      }),

    message: Yup.string()
      .trim()
      .required("* Повідомлення обов'язкове")
      .min(3, '* Повідомлення має містити не менше 3 символів')
      .max(500, '* Допускається не більше 500 символів'),
  }).required();
