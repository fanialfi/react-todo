import { useState } from "react";
import HeaderRow from "./HeaderRow";
import BodyRow from "./BodyRow";
import PropTypes from "prop-types";

export default function Task({ task }) {
  const [isExpand, setIsExpand] = useState(false);
  const handleOnClick = (ev) => {
    const liElm = ev?.currentTarget;
    const children = liElm?.children;
    const children1 = children.item(0);
    const children2 = children.item(1);

    children1.classList.toggle("-z-10");
    children1.classList.toggle("overflow-hidden");
    children1.classList.toggle("relative");
    children2.classList.toggle("-z-10");
    setIsExpand(!isExpand);
  };

  return (
    <li
      className={`text-center mx-6 py-3 rounded-md leading- px-4 max-w-md bg-sky-300 m-3 relative overflow-hidden transition-all ${
        isExpand ? "h-auto" : "h-10"
      }`}
      onClick={handleOnClick}
    >
      <HeaderRow task={task} />
      <BodyRow task={task} />
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object,
};
