import PropTypes from "prop-types";

export default function HeadingElement({ level, children, className }) {
  const Tag = `h${level}`;

  return <Tag className={className}>{children}</Tag>;
}

HeadingElement.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
};
