import { Container } from '@/components/Container';
import { Tabs } from '@/components/Tabs';

// import { fetchTabs } from '@/api/fetchTabs';

import services from '@/data/services.json';
import tabs from '@/data/tabsContent.json';

export const Services = async () => {
  // const cmsContent = await fetchTabs();

  // const {
  //   benefitList: { benefit },
  //   price: { tabs },
  // } = cmsContent;

  // console.log(tabs);

  return (
    <section>
      <Container>
        <h2>{services.sectionTitle}</h2>

        <Tabs tabs={tabs.tabs} />
      </Container>
    </section>
  );
};
