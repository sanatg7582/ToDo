import React, { useState } from "react";
import PropTypes from "prop-types";
import ToDoItem from "../ToDoItem";
import ToDoFilters from "../ToDoFilters";

/**
 * This component for render ToDoList
 * @param {array} todos // array of object
 * @param {func} updateToDos // func
 * @param {func} handleOnClick // func
 */

const ToDoList = (props) => {
  const [filterActive, setFilterActive] = useState(0);
  const [searchterm, setSearchterm] = useState();
  const { todos, updateToDos, handleOnClick } = props;

  // remove toDo
  const removeToDo = title => {
    updateToDos(
      todos.filter(itm => {
        return itm.todo !== title;
      })
    );
  };

  // Update toDo Status
  const updateToDoStatus = index => {
    updateToDos(
      todos.map((item, key) =>
        key === index ? { ...item, status: !item.status } : item
      )
    );
  };

  // Update complete ToDo status
  const completeToDoStatus = index => {
    updateToDos(
      todos.map((itm, key) =>
        key === index ? { ...itm, isCompleted: !itm.isCompleted } : itm
      )
    );
  };

  // update ToDo
  const updateToDo = (e, index) => {
    handleOnClick(e, index);
  };


  let newtoDos = [...todos];
  if (filterActive === 1) {
    newtoDos = todos.filter(itm => {
      return itm.status === true
    });
  }
  if (filterActive === 2) {
    newtoDos = todos.filter(itm => {
      return itm.isCompleted === true
    });
  }
  if (searchterm && searchterm.length > 0) {
    newtoDos = newtoDos.filter(itm => itm.todo.indexOf(searchterm) >= 0);
  }

  return (
    <>
      <ToDoFilters
        handleOnClick={(status) => { setFilterActive(status) }}
        filterActive={filterActive}
        searchterm={searchterm}
        setSearchtermfun={(key) => { setSearchterm(key) }}
      />

      <table>
        <thead>
          <tr>
            <th>ToDo</th>
            <th>Status</th>
            <th>IsCompleted</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {newtoDos.map((todo, index) => {
            return (
              <ToDoItem
                index={index}
                todoHeading={todo.todo}
                todoStatus={todo.status}
                todoIsCompleteStatus={todo.isCompleted}
                updateToDoStatus={() => updateToDoStatus(index)}
                completeToDoStatus={() => completeToDoStatus(index)}
                removeToDo={() => removeToDo(todo.todo)}
                updateToDo={updateToDo}
                key={index}
              />
            );

          })}
        </tbody>
      </table>
    </>
  );

}
// default props 
ToDoList.defaultProps = {
  todos: [],
  updateToDos: () => { },
  handleOnClick: () => { }
}
// PropTypes validation
ToDoList.propTypes = {
  todos: PropTypes.array,
  updateToDos: PropTypes.func,
  handleOnClick: PropTypes.func
};
export default ToDoList;
