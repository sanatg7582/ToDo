import React from "react";
import PropTypes from "prop-types";
import styles from "./Icon.module.scss";
import { IMAGE_PATH } from "../../../FooterData";
/**
 * Icon function return Icon anywhare where you want
 * @param {string} fileName img of src isrequired
 * @param {string} altTitle img of alt isrequired
 * return img element
 */
const Icon = props => {
  const { fileName, altTitle } = props;
  return (
    <img
      className={styles.iconImage}
      src={`${IMAGE_PATH}${fileName}`}
      alt={altTitle}
    />
  );
};
// propsType validation here
Icon.propTypes = {
  fileName: PropTypes.string.isRequired,
  altTitle: PropTypes.string.isRequired
};
export default Icon;
