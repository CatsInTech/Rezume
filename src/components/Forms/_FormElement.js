import React from "react";

const FormElement = ({ Label, Value, Type, onChange }) => {
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
          default:
            return null;
        }
      })()}
      {Value.length !== 0 && <span>{Label}</span>}
    </div>
  );
};

export default FormElement;
