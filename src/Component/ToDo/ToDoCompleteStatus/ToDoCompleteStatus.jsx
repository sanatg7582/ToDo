import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Shared/Button";

/**
 * This function return Is complete Button
 * @param {bool} isCompleteStatus,
 * @param {func} handleOnClick,
 * @param {number} index
 * @returns Element
 */
const ToDoCompleteStatus = props => {
  const { isCompleteStatus, handleOnClick, index } = props;
  return (
    <>
      {isCompleteStatus ? (
        <Button
          buttonType="button"
          btnClass="success"
          handleOnClick={handleOnClick}
          index={index}
          status={true}
        >
          <FontAwesomeIcon icon={faCheckCircle} />
        </Button>
      ) : (
        <Button
          buttonType="button"
          btnClass="danger"
          handleOnClick={handleOnClick}
          index={index}
          status={false}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
      )}
    </>
  );
};
// default props value
ToDoCompleteStatus.defaultProps = {
  isCompleteStatus: false,
  handleOnClick: () => {},
  index: 0
};
// prop type validation
ToDoCompleteStatus.propTypes = {
  isCompleteStatus: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  index: PropTypes.number
};
export default ToDoCompleteStatus;
