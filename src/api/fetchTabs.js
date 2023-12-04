import { getTabs } from './datoCMSRequest';

export const fetchTabs = async () => {
  try {
    const data = await getTabs();

    return data;
  } catch (error) {
    return [];
  }
};
