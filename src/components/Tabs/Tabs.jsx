'use client';

import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Benefits } from '../ui-kit/Benefits';
import { Accordion } from '../ui-kit/Accordion';

export const Tabs = ({ tabs, benefits }) => {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="grid grid-rows-2 grid-cols-2 xl:grid-cols-4 xl:grid-rows-1 gap-x-4 gap-y-3 md:gap-x-5 md:gap-y-8 xl:gap-x-[22px] mb-8 md:mb-10 w-full mdOnly:w-[464px] mx-auto">
          {tabs.map(({ tabTitle, id }) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  'font-ui_montserrat h-[64px] w-full mdOnly:max-w-[222px] xl:w-[294px] xl:h-[74px] px-[22px] py-[13px] md:py-3 border-2 border-ui_purpleLight text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_t_m_body2',
                  selected
                    ? 'bg-ui_purpleLight text-white cursor-default'
                    : 'bg-white text-ui_dark hover:text-white hover:bg-ui_purple focus:bg-ui_purple hover:border-ui_purple focus:border-ui_purple transitioned',
                )
              }
            >
              {tabTitle}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {tabs.map(({ id, services }, idx) => (
            <Tab.Panel key={id} className="w-full">
              {idx === 0 && <Benefits benefits={benefits} />}
              {idx === 2 && <Benefits benefits={benefits} />}

              <Accordion items={services} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

Tabs.proptypes = {
  tabs: PropTypes.array.isRequired,
  benefits: PropTypes.array.isRequired,
};
