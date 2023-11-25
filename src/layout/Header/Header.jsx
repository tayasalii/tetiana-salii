import { Banner } from '@/components/Banner';
import { HeaderViolet } from '@/components/HeaderViolet';

export const Header = () => {
  return (
    <header className="fixed z-10 left-0 top-0 w-full border-b border-b-white shadow-ui_headerShadow">
      <Banner />

      <HeaderViolet />
    </header>
  );
};
