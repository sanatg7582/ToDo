import React from "react";
import PropTypes from "prop-types";
import styles from "./Text.module.scss";
/**
 * Text function for return text
 * @param {boolean} strong
 * @param {string} heading
 */
const Text = props => {
  const { strong, heading } = props;
  const headingClass = strong ? styles.footerHeading : "";
  return <span className={headingClass}>{heading}</span>;
};
Text.defaultProps = {
  strong: false
};
// PropsType validation here
Text.propTypes = {
  heading: PropTypes.string,
  strong: PropTypes.bool
};
export default Text;
