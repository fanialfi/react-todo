import PropTypes from "prop-types";
import LabelElement from "./Label";
import Input from "./Input";

export default function InputElement({
  label,
  children,
  id,
  nameInput,
  placeholder,
  type,
}) {
  return (
    <div className="my-2">
      {label && <LabelElement id={id}>{children}</LabelElement>}
      <Input
        id={id}
        nameInput={nameInput}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

InputElement.propTypes = {
  label: PropTypes.bool,
  children: PropTypes.string,
  id: PropTypes.string,
  nameInput: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
