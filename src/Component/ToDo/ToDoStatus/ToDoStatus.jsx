import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Shared/Button";
/**
 * This function ToDo status button
 * @param {bool} todoStatus
 * @param {func} handleOnClick
 * @param {number} index
 * @return element
 */
const ToDoStatus = props => {
  const { todoStatus, handleOnClick, index } = props;
  return (
    <>
      {todoStatus ? (
        <Button
          buttonType="button"
          btnClass="success"
          handleOnClick={handleOnClick}
          index={index}
          status={true}
        >
          <FontAwesomeIcon icon={faCheck} />
        </Button>
      ) : (
        <Button
          buttonType="button"
          btnClass="danger"
          handleOnClick={handleOnClick}
          index={index}
          status={false}
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      )}
    </>
  );
};
// default props value
ToDoStatus.defaultProps = {
  todoStatus: true,
  handleOnClick: () => {},
  index: 0
};
// prop type validation
ToDoStatus.propTypes = {
  todoStatus: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  index: PropTypes.number
};
export default ToDoStatus;
