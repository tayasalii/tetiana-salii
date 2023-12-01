import { BaseVioletBlock } from '@/components/ui-kit/BaseVioletBlock';

import statistics from '@/data/statistics.json';

export const Stats = () => {
  return (
    <section>
      <h2 className="hidden">{statistics.title}</h2>
      <BaseVioletBlock mode="hero">
        <ul className="grid grid-cols-2 grid-auto-rows-2 xl:grid-rows-1 xl:grid-cols-4 text-white gap-x-4 gap-y-5 md:gap-x-[45px] md:gap-y-10 xl:gap-5">
          {statistics.stats.map((item, idx) => (
            <li key={idx} className="w-full text-center">
              <div className="mb-3 statsUnderline">
                <span className="italic text-ui_m_advantages md:text-ui_t_advantages xl:text-ui_d_advantages">
                  {item.value + ' '}
                  <span className="align-top text-ui_m_quote md:text-ui_t_quote xl:text-ui_d_quote">
                    {item.symbol}
                  </span>
                </span>
              </div>
              <p className="font-ui_montserrat text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </BaseVioletBlock>
    </section>
  );
};
