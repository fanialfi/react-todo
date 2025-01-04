import PropTypes from "prop-types";

export default function Input({ type, placeholder, id, nameInput }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={nameInput}
      className="p-1 px-3 focus:outline-none focus:ring-1 rounded-md m-2 placeholder:tracking-wider border border-slate-300"
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  nameInput: PropTypes.string,
};
