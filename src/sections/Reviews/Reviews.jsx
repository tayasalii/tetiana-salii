import { Container } from '@/components/Container';
import { ReviewList } from '@/components/ReviewList';
import { MainButton } from '@/components/ui-kit/MainButton';

import slidesInfo from '@/data/slides.json';
import btns from '@/data/buttons.json';

export const Reviews = () => {
  return (
    <section className="section" id="reviews">
      <Container>
        <h2 className="section-heading">
          Відгуки <br className="md:hidden" /> про консультації{' '}
          <br className="xl:hidden" /> та навчання
        </h2>
      </Container>

      <div className="reviewBg bg-no-repeat bg-cover bg-center py-5  h-[397px] md:h-[414px] md:py-[30px] xl:bg-[length:1440px] xl:h-[667px]  xl:py-[50px]">
        <Container>
          <ReviewList slidesInfo={slidesInfo} />
        </Container>
      </div>
      <Container>
        <MainButton linkData={btns.moreFeedback} className="mx-auto mt-10" />
      </Container>
    </section>
  );
};
