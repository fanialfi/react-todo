import Task from "../elements/Task/Index";
import PropTypes from "prop-types";

export default function Table({ data }) {
  return (
    <div className="container">
      <div className=" min-h-screen max-w-2xl mx-auto ">
        <ul>
          {data && data.map((task, index) => <Task key={index} task={task} />)}
        </ul>
      </div>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
