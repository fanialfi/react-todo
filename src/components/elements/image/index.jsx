import PropTypes from "prop-types";

export default function ImageElement({ sourceImage, altImage }) {
  return (
    <img
      src={sourceImage}
      alt={altImage}
      className="w-full h-full object-cover"
    />
  );
}

ImageElement.propTypes = {
  sourceImage: PropTypes.string,
  altImage: PropTypes.string,
};
