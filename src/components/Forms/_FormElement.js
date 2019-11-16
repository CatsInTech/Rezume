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
              >
                {Value}
              </textarea>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default FormElement;
