import React from "react";

const FormElement = ({ Label, Value, Type, onChange }) => {
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
                value="value field."
              >
                {Value}
              </textarea>
            );
          default:
            return null;
        }
      })()}
      {Value.length !== 0 && <span>{Label}</span>}
    </div>
  );
};

export default FormElement;
