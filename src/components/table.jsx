import capitalizeWords from "../utils/capitalizeWords";
import unixFormat from "../utils/unixFormat";
import data from "/src/assets/data.json";

export default function Table() {
  const handleOnClick = (ev) => {
    const liElm = ev?.currentTarget;
    const children = liElm?.children;
    const children1 = children.item(0);
    const children2 = children.item(1);

    children1.classList.toggle("-z-10");
    children1.classList.toggle("absolute");
    children2.classList.toggle("hidden");
  };
  return (
    <div className="container">
      <div className=" min-h-screen max-w-2xl mx-auto ">
        <ul>
          {data.map((task, index) => (
            <li
              key={index}
              className="text-center mx-6 py-3 rounded-md leading- px-4 max-w-md bg-sky-300 m-3 relative overflow-hidden"
              onClick={handleOnClick}
            >
              <div className="flex items-center justify-center top-0 bottom-0 left-0 right-0 ">
                <h3 className="font-roboto">{capitalizeWords(task?.name)}</h3>
              </div>

              <div className="text-start hidden">
                {/* name task */}
                <div className="flex mb-3">
                  <h4 className="font-bold w-[85px]">Name : </h4>
                  <h4>{capitalizeWords(task?.name)}</h4>
                </div>
                {/* prioritas task */}
                <div className="flex mb-3">
                  <h4 className="font-bold w-[85px]">Priority : </h4>
                  <h4>{task?.priority}</h4>
                </div>
                {/* status task */}
                <div className="flex mb-3">
                  <h4 className="font-bold w-[85px]">Status : </h4>
                  <h4>{task?.status}</h4>
                </div>
                {/* tengat waktu */}
                <div className="flex mb-3">
                  <h4 className="font-bold w-[85px]">Due Date : </h4>
                  <h4>{unixFormat(task?.dueDate)}</h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
