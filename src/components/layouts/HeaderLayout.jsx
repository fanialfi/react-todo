import PropTypes from "prop-types";

export default function HeaderLayout({ children }) {
  return (
    <div className="m-1 rounded-md shadow-md">
      <nav className="w-full container">
        <div className="flex items-center justify-between px-4">{children}</div>
      </nav>
    </div>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.node,
};
