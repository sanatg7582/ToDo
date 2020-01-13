import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

/**
 * function for Button anywhare and anytype
 * @param {string} buttonType // type of button
 * @param {string} buttonName // name of button
 * @param {string} btnClass // class of button
 * @param {Element} children // childern of button like icon
 * @param {func} handleOnClick // click function
 * @param {string} index // object index
 * @param {bool} status //
 * return button element
 */
const Button = props => {
  const {
    buttonType,
    buttonName,
    btnClass,
    children,
    handleOnClick,
    index,
    status
  } = props;
  return (
    <button
      type={buttonType}
      className={`${styles.btn} ${styles[btnClass]}`}
      onClick={e => handleOnClick(e, index, status)}
    >
      {buttonName ? buttonName : children}
    </button>
  );
};
// default props
Button.defaultProps = {
  buttonName: "",
  btnClass: "",
  children: <></>,
  handleOnClick: () => {},
  index: "",
  status: true
};
// proptypes validation
Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonName: PropTypes.string,
  btnClass: PropTypes.string,
  children: PropTypes.element,
  handleOnClick: PropTypes.func,
  status: PropTypes.bool
};
export default Button;
