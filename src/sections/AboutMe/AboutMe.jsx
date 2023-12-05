import Image from 'next/image';
import Markdown from 'react-markdown';

import { Container } from '@/components/Container';
import { MainButton } from '@/components/ui-kit/MainButton';
import { BaseVioletBlock } from '@/components/ui-kit/BaseVioletBlock';

import FlowerBG from 'public/images/bg-flower.svg';
import HandsBG from 'public/images/bg-hands.svg';
import aboutMe from '@/data/aboutMe.json';
import btns from '@/data/buttons.json';

export const AboutME = () => {
  return (
    <section className="pt-20 md:pt-[130px] xl:pt-[150px]">
      <Container className="mb-10 md:mb-[60px]">
        <h2 className="mb-8 text-center md:mb-10 text-ui_m_h1 md:text-ui_t_h1 xl:text-ui_d_h1 text-ui_purple">
          {aboutMe.aboutME}
        </h2>

        <h3 className="mb-6 text-ui_m_h2 md:text-ui_t_h2 xl:text-ui_d_h2 text-ui_purple md:mb-10 xl:mb-[38px]">
          {aboutMe.why}
        </h3>

        <div className="md:grid md:grid-auto-rows md:grid-cols-[302px_1fr] md:gap-x-5 xl:grid-cols-[360px_1fr] xl:gap-x-[60px]">
          <p className="mb-8 text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 font-ui_montserrat md:col-start-2 mdOnly:self-center">
            {aboutMe.p1}
            <br className="hidden smOnly:brake" />
            {aboutMe.p2}
          </p>

          <FlowerBG className="w-[280px] h-[251px] mx-auto mb-8 md:w-[302px] md:h-[277px] md:row-start-1 xl:w-[360px] xl:h-[323px] xl:row-span-5 xl:mb-0" />

          <h3 className="mb-10 text-ui_m_description md:text-ui_t_description2 xl:text-ui_d_description2 text-ui_purple mdOnly:col-span-2">
            {aboutMe.how}
          </h3>

          <ul className="mb-8 md:mb-7 xl:mb-8 grid grid-auto-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-x-[60px] md:gap-x-8 gap-y-[51px] smOnly:mx-auto smOnly:w-[300px] font-ui_montserrat mdOnly:col-span-2 xl:flex xl:justify-between">
            {aboutMe.problems.map((item, idx) => (
              <li key={idx} className="w-[120px] md:grid md:w-[150px]">
                <span className="block relative text-center text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 mb-[6px] before:absolute before:inset-0 before:-top-6 before:content-sparkle mdOnly:px-1">
                  {item.problem}
                </span>
                <Image
                  src={`/images/${item.img}`}
                  alt={item.alt}
                  width={120}
                  height={120}
                  className="md:w-[150px] md:h-[150px] md:self-end"
                />
              </li>
            ))}
          </ul>

          <Markdown className="mb-3 md:mb-10 text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 font-ui_montserrat prose-strong:text-ui_purple prose-strong:text-ui_m_description md:prose-strong:text-ui_t_description2 xl:prose-strong:text-ui_d_description2 prose-strong:font-ui_garamond mdOnly:col-span-2">
            {aboutMe.success}
          </Markdown>
          <Markdown className="mb-10 md:md-[66px] xl:mb-[60px] text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 font-ui_montserrat prose-strong:text-ui_purple prose-strong:text-ui_m_description md:prose-strong:text-ui_t_description2 xl:prose-strong:text-ui_d_description2 prose-strong:font-ui_garamond mdOnly:col-span-2">
            {aboutMe.escort}
          </Markdown>
        </div>

        <h3 className="mb-6 md:mb-8 xl:mb-10 text-ui_m_h2 md:text-ui_t_h2 xl:text-ui_d_h2 text-ui_purple">
          {aboutMe.consultation}
        </h3>

        <ul className="flex flex-col items-center gap-5 mb-10 md:flex-row">
          {aboutMe.advantages.map((item, idx) => (
            <li key={idx} className="relative">
              <Image
                src={`/images/${item.img}`}
                alt={item.alt}
                width={223}
                height={207}
                className="md:w-[221px] xl:w-[400px] xl:h-[375px]"
              />
              <div className="absolute w-full bg-ui_purpleLight h-[42px] md:h-[45px] xl:h-[70px] bottom-0 flex justify-center items-center">
                <span className="text-center text-white text-ui_m_body1 md:text-ui_d_t_mini xl:text-ui_d_items font-ui_montserrat">
                  {item.advantage}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="m-auto w-min">
          <MainButton linkData={btns.connectWithTelegram} />
        </div>
      </Container>
      <BaseVioletBlock mode="about" className="relative">
        <div className="md:w-[406px] xl:w-[733px]">
          <blockquote className="mb-3 italic text-white text-ui_m_quote md:text-ui_t_quote xl:text-ui_d_quote">
            {aboutMe.quoteLine1}
            <br className="hidden mdOnly:block" />
            {aboutMe.quoteLine2}
          </blockquote>

          <cite className="block ml-auto not-italic text-white whitespace-nowrap w-min text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_items font-ui_montserrat">
            {aboutMe.author}
          </cite>
        </div>

        <HandsBG className="w-[208px] h-[93px] rotate-[-20deg] shadowy md:absolute md:w-[346px] md:h-[154px] md:top-[-30px] xl:top-[-39px] md:right-0 md:rotate-[20deg] xl:w-[420px] xl:h-[187px]" />
      </BaseVioletBlock>
    </section>
  );
};
