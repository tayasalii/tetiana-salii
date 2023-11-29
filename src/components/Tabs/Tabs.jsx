'use client';

import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs }) => {
  return (
    <div className="w-full mdOnly:w-[464px] mx-auto">
      <Tab.Group>
        <Tab.List className="grid grid-rows-2 grid-cols-2 xl:grid-cols-4 xl:grid-rows-1 gap-x-4 gap-y-3 md:gap-x-5 md:gap-y-8 xl:gap-x-[22px] mb-8 md:mb-10">
          {tabs.map(({ tabTitle, id }) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  'h-[60px] w-full mdOnly:max-w-[222px] xl:w-[294px] xl:h-[70px] px-[22px] py-3 border border-ui_purpleLight text-ui_m_body1 md:text-ui_t_body1 xl:ui_t_m_body2',
                  selected
                    ? 'bg-ui_purpleLight text-white cursor-default'
                    : 'bg-white text-ui_dark hover:text-white hover:bg-ui_purple focus:bg-ui_purple transitioned',
                )
              }
            >
              {tabTitle}
            </Tab>
          ))}
        </Tab.List>

        {/* <Tab.Panels className="mt-2">
          {tabs.map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              )}
            >
              <ul>
                {posts.map(post => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels> */}
      </Tab.Group>
    </div>
  );
};

Tabs.proptypes = {
  tabs: PropTypes.array.isRequired,
};
