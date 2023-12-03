import { Container } from '@/components/Container';
import { Tabs } from '@/components/Tabs';
import { MainButton } from '@/components/ui-kit/MainButton';

// import { fetchTabs } from '@/api/fetchTabs';

import services from '@/data/services.json';
import tabs from '@/data/tabsContent.json';
import benefits from '@/data/benefits.json';
import btns from '@/data/buttons.json';

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

        <Tabs tabs={tabs.tabs} benefits={benefits} />

        <MainButton
          linkData={btns.connectWithTelegram}
          className="mx-auto mt-4"
        />
      </Container>
    </section>
  );
};
