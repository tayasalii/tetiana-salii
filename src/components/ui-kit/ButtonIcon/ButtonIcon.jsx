import PropTypes from 'prop-types';

import TelegramIcon from 'public/icons/telegram.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import WhatsappIcon from 'public/icons/whatsapp.svg';

export const ButtonIcon = ({ icon }) => {
  return (
    <>
      {icon === 'telegram' && (
        <TelegramIcon className="w-[25px] h-[22px] z-[2]" />
      )}

      {icon === 'instagram' && (
        <InstagramIcon className="w-[22px] h-[22px] z-[2]" />
      )}

      {icon === 'whatsapp' && (
        <WhatsappIcon className="w-[22px] h-[22px] z-[2]" />
      )}
    </>
  );
};

ButtonIcon.proptypes = {
  icon: PropTypes.oneOf[('telegram', 'instagram', 'whatsapp')],
};
