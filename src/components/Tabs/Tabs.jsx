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
        <Tab.List
          as="ul"
          className="grid grid-rows-2 grid-cols-2 xl:grid-cols-4 xl:grid-rows-1 gap-x-4 gap-y-3 md:gap-x-5 md:gap-y-8 xl:gap-x-[22px] mb-[25px] md:mb-8 xl:mb-10 w-full mdOnly:w-[464px] mx-auto"
        >
          {tabs.map(({ tabTitle }, id) => (
            <Tab
              as="li"
              key={id}
              className={classNames(
                'font-ui_montserrat min-h-[64px] smOnly:h-auto w-full mdOnly:max-w-[222px] xl:w-[294px] xl:h-[74px] focus:outline-none',
              )}
            >
              {({ selected }) => (
                <button
                  type="button"
                  disabled={selected}
                  className={classNames(
                    'font-ui_montserrat w-full h-full smOnly:px-[8px] smMdOnly:px-[22px] md:px-[22px] py-[13px] md:py-3 xl:px-[48px] border-[1px] border-ui_purpleLight text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_t_m_body2',
                    selected
                      ? 'bg-ui_purpleLight text-white cursor-default'
                      : 'bg-white text-ui_dark hover:text-white focus-visible:text-white hover:bg-ui_purple focus-visible:bg-ui_purple hover:border-ui_purple focus-visible:border-ui_purple transitioned',
                  )}
                >
                  <h3>{tabTitle}</h3>
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {tabs.map(({ id, hasBenefits, services }) => (
            <Tab.Panel key={id} tabIndex="1" className="w-full">
              {hasBenefits && <Benefits benefits={benefits} />}

              <Accordion items={services} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

Tabs.proptypes = {
  tabs: PropTypes.arrayOf({
    tabTitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    hasBenefits: PropTypes.bool.isRequired,
    services: PropTypes.arrayOf({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      subtitle: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }),
    }).isRequired,
  ).isRequired,
};
