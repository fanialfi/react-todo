import ButtonElement from "../elements/button";
import FormElement from "../elements/form";
import InputElement from "../elements/input";

export default function CardTaskForm() {
  return (
    <div className="p-2 text-center w-full mx-2">
      {/* header task form */}
      <div className="p-2 m-2">
        <h1 className="text-lg font-light tracking-wide">
          Apa Rencamanu Hari ini?
        </h1>
      </div>
      {/* body task form */}
      <div>
        <FormElement>
          <InputElement
            nameInput="inputTask"
            id="inputTask"
            placeholder="masukkan disini..."
            type="text"
          />
          <ButtonElement type="button">masukkan</ButtonElement>
        </FormElement>
      </div>
    </div>
  );
}
