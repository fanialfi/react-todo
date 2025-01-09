import PropTypes from "prop-types";

export default function HeadingElement({ level, children }) {
  const Tag = `h${level}`;

  return <Tag className="text-center">{children}</Tag>;
}

HeadingElement.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};
