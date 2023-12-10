import { Container } from '@/components/Container';
import { Tabs } from '@/components/Tabs';
import { MainButton } from '@/components/ui-kit/MainButton';

import { fetchTabs } from '@/api/fetchTabs';

import services from '@/data/services.json';
import btns from '@/data/buttons.json';

export const Services = async () => {
  const cmsContent = await fetchTabs();

  const {
    benefitList: { benefit },
    price: { tabs },
  } = cmsContent;

  return (
    <section id="services" className="section">
      <Container>
        <h2 className="section-heading">{services.sectionTitle}</h2>

        <Tabs tabs={tabs} benefits={benefit} />

        <MainButton
          linkData={btns.connectWithTelegram}
          className="mx-auto mt-8 md:mt-10 xl:mt-[23px]"
        />
      </Container>
    </section>
  );
};
