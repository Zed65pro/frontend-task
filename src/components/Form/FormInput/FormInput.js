import { useState } from "react";
import "./FormInput.css";
/**@module FormInput */
/**
 * Indivial form input custom component
 * @component
 * @param {Object} props
 * @param {Object[]} props.inputProps
 * @param {string} props.errorMessage
 * @param {string} props.label
 * @param {Function} props.onChange
 * @param {number} props.id
 * @returns {JSX.Element}
 */
const FormInput = (props) => {
  /**
   * React useState reference state - state for the values in the inputs of the form
   * @typedef {Object} focused
   * @const
   */

  /**
   * React useState state setter - setter function for the values in the form
   * @callback setFocused
   * @param {focused} state
   * @function
   * @returns {void}
   */
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  /**
   * Function to handle what happens if a button is focused
   * @typedef {Function} handleFocus
   * @param {HTMLElement} e
   * @function
   * @returns {void}
   */
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
        <select {...inputProps} onBlur={onChange} onChange={onChange}>
          <option value=""></option>
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
