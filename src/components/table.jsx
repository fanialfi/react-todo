import data from "/src/assets/data.json";
import Task from "./elements/Task/Index";

export default function Table() {
  return (
    <div className="container">
      <div className=" min-h-screen max-w-2xl mx-auto ">
        <ul>
          {data.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}
