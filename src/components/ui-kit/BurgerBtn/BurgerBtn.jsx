import BurgerIcon from 'public/icons/burger.svg';

export const BurgerBtn = () => {
  return (
    <button
      type="button"
      className="h-[50px] w-[50px] smOnly:relative smOnly:right-[-9px] flex justify-center items-center md:ml-auto xl:hidden"
    >
      <BurgerIcon className="stroke-white w-[32px] h-5" />
    </button>
  );
};
