import PropTypes from "prop-types";

export default function ButtonElement({ type, children }) {
  return (
    <button
      type={type}
      className="bg-sky-400 hover:bg-sky-500 active:bg-sky-600 w-fit p-2 my-2 rounded-md text-slate-800 font-light"
    >
      {children}
    </button>
  );
}

ButtonElement.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
};
