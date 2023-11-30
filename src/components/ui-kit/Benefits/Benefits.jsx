export const Benefits = ({ benefits }) => {
  return (
    <ul className="flex w-full smOnly:max-w-[366px] xl:max-w-max gap-4 md:gap-20 xl:gap-[140px] mx-auto mdOnly:ml-0 mb-8 md:mb-10">
      {benefits.map(({ id, subtitle, categories }) => {
        return (
          <li key={id}>
            <h4 className="font-ui_garamond text-ui_m_description text-ui_purple pl-[31px] mb-[10px]">
              {subtitle}
            </h4>

            <ul className="font-ui_montserrat text-ui_dark text-ui_m_body1 grid grid-col-1 gap-[14px]">
              {categories.map(({ id, category }) => (
                <li
                  key={id}
                  className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle !whitespace-normal"
                >
                  {category}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
