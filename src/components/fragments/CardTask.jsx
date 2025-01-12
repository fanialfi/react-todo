import HeadingElement from "../elements/heading";
import InputElement from "../elements/input";
import PropTypes from "prop-types";

export default function CardTask({ children }) {
  return (
    <div className="flex overflow-hidden p-1 mx-2 my-1 rounded-md shadow-md h-16">
      <div className="basis-1/5 flex items-center justify-center border-r">
        <InputElement
          label={false}
          id={"inputCheckbox"}
          nameInput={"inputCheckbox"}
          type={"checkbox"}
          className={"scale-[1.7]"}
        />
      </div>
      <div className="basis-4/5  text-start border-l px-2">
        <HeadingElement
          level={4}
          className="text-ellipsis overflow-hidden h-1/2"
        >
          {children}
        </HeadingElement>
        <p className="">Today 10:00 PM - 11:45 PM</p>
      </div>
    </div>
  );
}

CardTask.propTypes = {
  children: PropTypes.string,
};
