import capitalizeWords from "../utils/capitalizeWords";
import data from "/src/assets/data.json";
export default function Table() {
  return (
    <div className="container">
      <div className=" min-h-screen max-w-2xl mx-auto ">
        <ul>
          {data.map((task, index) => (
            <li
              key={index}
              className=" mx-6 py-6 rounded-md leading- px-3 max-w-md bg-sky-300 m-3"
            >
              <h3 className="font-roboto">{capitalizeWords(task?.name)}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
