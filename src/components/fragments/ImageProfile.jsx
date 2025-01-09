import ImageElement from "../elements/image";
import image from "../../images/image.jpg";

export default function ImageProfile() {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-sky-400 m-2">
      <ImageElement sourceImage={image} altImage="image profile" />
    </div>
  );
}
