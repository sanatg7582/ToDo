import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
/**
 * function for input type render anywhare
 * @param {string} InputLabel // Name
 * @param {string} InputType // text/number/date
 * @param {string} InputName // name
 * @param {boolean} IsRequired // input required or not
 * @param {fun} handleChange // input value bind function
 * @param {string} InputValue // input value
 * @param {string} InputMaxlength // input maxlength
 * return element with label and Input
 */
const Input = props => {
  const {
    InputLabel,
    InputType,
    InputName,
    IsRequired,
    handleChange,
    InputValue,
    InputMaxlength
  } = props;
  return (
    <div className={styles.InputContainer}>
      {InputLabel ? <label className={styles.labelClass}>{`${InputLabel} :- `}</label> : ""}

      <input
        type={InputType}
        className={styles.formInput}
        name={InputName}
        value={InputValue}
        placeholder={`Please enter ${InputName}`}
        required={IsRequired}
        onChange={e => handleChange(e)}
        maxLength={InputMaxlength}
      />
    </div>
  );
};
// default props
Input.defaultProps = {
  InputLabel: "",
  InputType: "",
  InputName: "",
  IsRequired: false,
  handleChange: () => { },
  InputValue: "",
  InputMaxlength: ""
};
// proptypes validation
Input.propTypes = {
  InputLabel: PropTypes.string.isRequired,
  InputType: PropTypes.string.isRequired,
  InputName: PropTypes.string.isRequired,
  IsRequired: PropTypes.bool,
  handleChange: PropTypes.func,
  InputValue: PropTypes.string,
  InputMaxlength: PropTypes.string
};
export default Input;
