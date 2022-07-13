import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {!(inputProps.name === "status") ? (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
      ) : (
        <select
          {...inputProps}
          onBlur={onChange}
          onChange={onChange}
          autoFocus={!props.value}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="in-progress">Inprogress</option>
        </select>
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
