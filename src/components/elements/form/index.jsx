import PropTypes from "prop-types";
export default function FormElement({ action, method, children }) {
  return (
    <form
      action={action}
      method={method}
      className=" p-2 rounded-lg shadow-lg flex flex-col justify-center items-center"
    >
      {children}
    </form>
  );
}

FormElement.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
  children: PropTypes.node,
};
