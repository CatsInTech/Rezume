import React,{useState} from "react";

const FormElement = ({ Label, Value, Type, onChange, onSwitch, ImageHandler }) => {
  const [fix,setfix] = useState("");
  const hoverClick=()=>{
      onSwitch();
      if (fix === "") {
        setfix("yes");
      }
      else {
        setfix("");
      }
  }



  return (
    <div className="rezume-forms-item">
      {(() => {
        switch (Type) {
          case "Text":
            return (
              <>
                <label htmlFor={`ID-${Label}`}>{Label}</label>
                <input
                  id={`ID-${Label}`}
                  type="text"
                  className="form-control rounded-0"
                  placeholder={Label}
                  value={Value}
                  onChange={onChange}
                />
              </>
            );
          case "TextArea":
            return (
              <>
                <label htmlFor={`ID-${Label}`}>{Label}</label>
                <textarea
                  id={`ID-${Label}`}
                  className="form-control rounded-0"
                  placeholder={Label}
                  onChange={onChange}
                  rows="10"
                  value={Value}
                ></textarea>
              </>
            );
          case "Switch":
            return (
              <div className="form-check form-switch">
                <div className="" onClick={hoverClick}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={fix}
                  />
                  <label className="form-check-label">
                    Add profile picture
                  </label>
                </div>
                <br />
                {Value.Set ? (
                  <div className="form-group">
                    <input
                      type="file"
                      className="form-control-file"
                      id="formControlFile"
                      name="image-upload"
                      accept="image/*"
                      onChange={ImageHandler}
                    />
                  </div>
                ) : null}
              </div>
            );
          default:
            return null;
        }
      })()}
      {Value.length !== 0 && <span>{Label}</span> && Type !== "Switch"}
    </div>
  );
};

export default FormElement;
