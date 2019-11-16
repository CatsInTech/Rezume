import React from "react";
import FormElement from "./_FormElement";

const Forms = ({ CurrentPage, SetSection, Resume }) => {
  return (
    <div className="rezume-forms">
      {Resume[CurrentPage] &&
        Object.keys(Resume[CurrentPage]).map((fe, key) => (
          <FormElement
            key={key}
            Type={fe === "Summary" ? "TextArea" : "Text"}
            Label={fe}
            Value={Resume[CurrentPage][fe]}
            onChange={e =>
              SetSection(CurrentPage, {
                ...Resume[CurrentPage],
                [fe]: e.target.value
              })
            }
          />
        ))}
    </div>
  );
};

export default Forms;
