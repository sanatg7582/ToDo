import React from "react";
import PropTypes from "prop-types";
import Text from "../../Shared/Text";
import ToDOStatus from "../ToDoStatus";
import ToDoCompleteStatus from "../ToDoCompleteStatus";
import ToDoAction from "../ToDoAction";
/**
 * This function for todo Item row in table
 * @param {number} index
 * @param {string} todoHeading
 * @param {bool} todoStatus
 * @param {bool} todoIsCompleteStatus
 * @param {func} updateToDoStatus
 * @param {func} completeToDoStatus
 * @param {func} removeToDo
 * @param {func} updateToDo
 * @returns tr element
 */
const ToDoItem = props => {
  const {
    index,
    todoHeading,
    todoStatus,
    todoIsCompleteStatus,
    updateToDoStatus,
    completeToDoStatus,
    removeToDo,
    updateToDo
  } = props;
  return (
    <tr>
      <td>
        <Text strong={true} heading={todoHeading} />
      </td>
      <td>
        <ToDOStatus
          todoStatus={todoStatus}
          handleOnClick={updateToDoStatus}
          index={index}
        />
      </td>
      <td>
        <ToDoCompleteStatus
          isCompleteStatus={todoIsCompleteStatus}
          handleOnClick={completeToDoStatus}
          index={index}
        />
      </td>
      <td>
        <ToDoAction
          index={index}
          handleOnClickRemove={removeToDo}
          handleOnClickUpdate={updateToDo}
        />
      </td>
    </tr>
  );
};
// default props value
ToDoItem.defaultProps = {
  index: 0,
  todoHeading: "",
  todoStatus: true,
  todoIsCompleteStatus: false,
  updateToDoStatus: () => {},
  completeToDoStatus: () => {},
  removeToDo: () => {},
  updateToDo: () => {}
};
//props type validation
ToDoItem.propTypes = {
  index: PropTypes.number,
  todoHeading: PropTypes.string.isRequired,
  todoStatus: PropTypes.bool.isRequired,
  todoIsCompleteStatus: PropTypes.bool.isRequired,
  updateToDoStatus: PropTypes.func.isRequired,
  completeToDoStatus: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired,
  updateToDo: PropTypes.func.isRequired
};
export default ToDoItem;
