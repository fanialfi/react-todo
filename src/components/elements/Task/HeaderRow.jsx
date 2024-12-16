import capitalizeWords from "../../../utils/capitalizeWords";
import PropTypes from "prop-types";

export default function HeaderRow({ task }) {
  return (
    <div className="flex items-center justify-center top-0 bottom-0 left-0 right-0 ">
      <h3 className="font-roboto">{capitalizeWords(task?.name)}</h3>
    </div>
  );
}

HeaderRow.propTypes = {
  task: PropTypes.object,
};
