import capitalizeWords from "../../../utils/capitalizeWords";
import unixFormat from "../../../utils/unixFormat";
import PropTypes from "prop-types";

export default function BodyRow({ task }) {
  return (
    <div className="text-start -z-10">
      {/* name task */}
      <DataRow nameTable="Name">{capitalizeWords(task?.name)}</DataRow>
      {/* prioritas task */}
      <DataRow nameTable="Priority">{task?.priority}</DataRow>
      {/* status task */}
      <DataRow nameTable="Status">{task?.status}</DataRow>
      {/* tengat waktu */}
      <DataRow nameTable="Due Date">{unixFormat(task?.dueDate)}</DataRow>
    </div>
  );
}

BodyRow.propTypes = {
  task: PropTypes.object,
};

function DataRow({ nameTable, children }) {
  return (
    <div className="flex mb-3">
      <h4 className="font-bold w-[85px]">{nameTable}</h4>
      <h4 className="font-bold mr-4">:</h4>
      <h4>{children}</h4>
    </div>
  );
}

DataRow.propTypes = {
  nameTable: PropTypes.string,
  children: PropTypes.any,
};
