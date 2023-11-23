import PropTypes from 'prop-types';

export const NavLink = ({ dataLink: { href, type, title } }) => (
  <>
    {type === 'anchor' ? (
      <a
        href={`#${href}`}
        className="font-ui_garamond text-ui_t_m_body2 xl:text-ui_d_body2"
      >
        {title}
      </a>
    ) : (
      <a
        href={href}
        className="font-ui_garamond text-ui_t_m_body2 xl:text-ui_d_body2"
        rel="nofollow noreferrer noopener"
        target="_blank"
      >
        {title}
      </a>
    )}
  </>
);

NavLink.propTypes = {
  dataLink: PropTypes.shape({
    href: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['anchor', 'link']).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
