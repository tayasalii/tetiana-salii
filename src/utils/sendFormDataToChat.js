import axios from 'axios';

const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}`;

export const sendFormDataToChat = async (
  data,
  setIsSendingError,
  setIsSuccess,
  reset,
) => {
  const { name, phone, message } = data;
  const text = `Ім'я: ${name}\nТелефон: +${phone}\nПовідомлення: ${message}`;

  return await axios
    .post(URL_API, {
      text,
      parse_mod: 'html',
    })
    .then(() => {
      reset();
    })
    .then(() => {
      setTimeout(() => {
        setIsSuccess(true);
      }, 0);
    })
    .catch(error => {
      console.log(error.response.data);

      setIsSendingError(true);
    });
};
