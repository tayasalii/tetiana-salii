import Image from 'next/image';
import Markdown from 'react-markdown';

import { Container } from '@/components/Container';
import { MainButton } from '@/components/ui-kit/MainButton';

import FlowerBG from 'public/images/bg-flower.svg';
import aboutMe from '@/data/aboutMe.json';
import btns from '@/data/buttons.json';
import { BaseVioletBlock } from '@/components/ui-kit/BaseVioletBlock';

export const AboutME = () => {
  return (
    <section className="pt-20 md:pt-[130px] xl:pt-[150px]">
      <Container>
        <h2 className="mb-8 text-center md:mb-10 text-ui_m_h1 md:text-ui_t_h1 xl:text-ui_d_h1 text-ui_purple">
          {aboutMe.aboutME}
        </h2>

        <h3 className="mb-6 text-ui_m_h2 md:text-ui_t_h2 xl:text-ui_d_h2 text-ui_purple md:mb-10 xl:mb-[38px]">
          {aboutMe.why}
        </h3>

        <p className="mb-3 text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 font-ui_montserrat">
          {aboutMe.p1}
        </p>
        <p className="mb-8 text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 xl:mb-8 font-ui_montserrat">
          {aboutMe.p2}
        </p>

        <FlowerBG width={280} height={251} className="m-auto mb-8" />

        <h3 className="mb-[39px] xl:mb-[10px] text-ui_m_description md:text-ui_t_description2 xl:text-ui_d_description2 text-ui_purple">
          {aboutMe.how}
        </h3>

        <ul className="mb-8 grid grid-auto-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-x-[60px] md:gap-x-8 gap-y-[51px] m-auto smOnly:w-[300px] font-ui_montserrat">
          {aboutMe.problems.map((item, idx) => (
            <li key={idx} className="basis-[120px] md:basis-[140px]">
              <span className="block relative text-center text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 mb-[6px] before:absolute before:inset-0 before:-top-6 before:content-sparkle">
                {item.problem}
              </span>
              <Image
                src={`/images/${item.img}`}
                alt={item.alt}
                width={120}
                height={120}
                className="md:w-[140px] md:h-[140px] xl:w-[150px] xl:h-[150px]"
              />
            </li>
          ))}
        </ul>

        <Markdown className="mb-3 text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 font-ui_montserrat prose-strong:text-ui_purple prose-strong:text-ui_m_description prose-strong:font-ui_garamond">
          {aboutMe.success}
        </Markdown>
        <Markdown className="mb-10 text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 font-ui_montserrat prose-strong:text-ui_purple prose-strong:text-ui_m_description prose-strong:font-ui_garamond">
          {aboutMe.escort}
        </Markdown>

        <h3 className="mb-6 text-ui_m_h2 md:text-ui_t_h2 xl:text-ui_d_h2 text-ui_purple md:mb-10 xl:mb-[38px]">
          {aboutMe.consultation}
        </h3>

        <ul className="flex flex-col items-center gap-5 mb-10">
          {aboutMe.advantages.map((item, idx) => (
            <li key={idx} className="relative">
              <Image
                src={`/images/${item.img}`}
                alt={item.alt}
                width={223}
                height={207}
              />
              <div className="absolute w-full bg-ui_purpleLight h-[42px] bottom-0 flex justify-center items-center">
                <span className="text-center text-white text-ui_m_body1 font-ui_montserrat">
                  {item.advantage}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="m-auto mb-10 w-min">
          <MainButton linkData={btns.connectWithTelegram} />
        </div>

        <BaseVioletBlock mode="about">
          <blockquote className="italic text-white text-ui_m_quote">
            {aboutMe.quote}
          </blockquote>
          <cite className="block ml-auto not-italic text-white whitespace-nowrap w-min text-ui_m_body1 font-ui_montserrat">
            {aboutMe.author}
          </cite>
        </BaseVioletBlock>
      </Container>
    </section>
  );
};
