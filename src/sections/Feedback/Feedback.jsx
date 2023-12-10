import Image from 'next/image';

import { Container } from '@/components/Container';
import { Form } from '@/components/Form';

import txt from '@/data/form.json';

export const Feedback = () => {
  return (
    <section className="pt-[75px] md:pt-[150px] pb-20 md:pb-[130px] xl:pb-[150px]">
      <Container className="smOnly:px-0 xl:grid xl:grid-cols-[508px_1fr]">
        <h2 className="mb-8 text-center md:mb-10 text-ui_m_h1 md:text-ui_t_h1 xl:text-ui_d_h1 text-ui_purple xl:col-span-2">
          {txt.header}
        </h2>

        <Form className="xl:col-start-2" />

        <picture className="xl:row-start-2">
          <source media="(max-width: 767.8px)" srcSet="/images/bouquet_m.jpg" />
          <source media="(min-width: 1280px)" srcSet="/images/bouquet_d.jpg" />
          <source media="(min-width: 768px)" srcSet="/images/bouquet_t.jpg" />
          <Image
            src={'/images/bouquet_d.jpg'}
            className="w-full h-auto xl:object-cover xl:h-full"
            width={508}
            height={566}
            sizes="(max-width: 1280px) 100vw, 40vw"
            alt="Вазон"
          />
        </picture>
      </Container>
    </section>
  );
};
