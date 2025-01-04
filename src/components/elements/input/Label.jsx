import PropTypes from "prop-types";

export default function LabelElement({ children, id }) {
  return <label htmlFor={id}>{children}</label>;
}

LabelElement.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
};
