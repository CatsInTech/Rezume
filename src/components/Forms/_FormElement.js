import React from "react";

const FormElement = ({ Label, Value, Type, onChange, onSwitch, ImageHandler }) => {
  return (
    <div className="rezume-forms-item">
      {(() => {
        switch (Type) {
          case "Text":
            return (
              <input
                type="text"
                className="form-control rounded-0"
                placeholder={Label}
                value={Value}
                onChange={onChange}
              />
            );
          case "TextArea":
            return (
              <textarea
                className="form-control rounded-0"
                placeholder={Label}
                onChange={onChange}
                rows="10"
                value={Value}
              >
              </textarea>
            );
          case "Switch":
            return (
              <div className="form-check form-switch">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={onSwitch}
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
