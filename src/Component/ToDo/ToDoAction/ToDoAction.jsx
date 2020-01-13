import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Shared/Button";
/**
 * This function return Edit and Delete button
 * @param {number} index
 * @param {func} handleOnClickRemove
 * @param {func} handleOnClickUpdate
 * @returns Button Element
 */
const ToDoAction = props => {
  const { index, handleOnClickRemove, handleOnClickUpdate } = props;
  return (
    <>
      <Button
        buttonType="button"
        btnClass="warning"
        handleOnClick={handleOnClickUpdate}
        index={index}
      >
        <FontAwesomeIcon icon={faPen} />
      </Button>
      &nbsp;
      <Button
        buttonType="button"
        btnClass="danger"
        handleOnClick={handleOnClickRemove}
        index={index}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </>
  );
};
// default props value
ToDoAction.defaultProps = {
  index: 0,
  handleOnClickRemove: () => {},
  handleOnClickUpdate: () => {}
};
//prop type validation
ToDoAction.propTypes = {
  index: PropTypes.number,
  handleOnClickRemove: PropTypes.func.isRequired,
  handleOnClickUpdate: PropTypes.func.isRequired
};
export default ToDoAction;
