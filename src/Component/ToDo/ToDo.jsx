import React, { useState } from "react";
import styles from "./ToDo.module.scss";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import ToDoList from "./ToDoList";

/**
 * This component for render ToDoList and ToDo form
 */
const ToDo = () => {
  const [index, setIndex] = useState(-1);
  const [todo, setTodo] = useState();
  const [todoData, setTodoData] = useState([
    { todo: "test", status: true, isCompleted: false }
  ]);

  const handleChange = e => {
    const { value } = e.target;
    setTodo(value);
  };

  const addToDo = e => {
    e.preventDefault();
    if (index !== -1) {
      // update To DO
      for (let i = 0; i < todoData.length; i++) {
        if (i === index) {
          todoData[i].todo = todo;
        }
      }
      setTodoData(todoData);
      setIndex(-1);
      setTodo();
    } else {
      // add To Do
      setTodoData([
        ...todoData,
        {
          todo: todo,
          status: true,
          isCompleted: false
        }
      ]);
      setIndex(-1);
      setTodo();
    }
  };

  // get toDo detail for edit
  const getToDoDetail = (e, index) => {
    setIndex(index);
    setTodo(todoData[index].todo);
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoForm}>
        <form onSubmit={e => addToDo(e)}>
          <div className={styles.todoFormGroup}>
            <Input
              InputLabel="Todo"
              InputType="text"
              InputName="todo"
              IsRequired={true}
              handleChange={handleChange}
              InputValue={todo}
              InputMaxlength="30"
            />
          </div>
          <Button
            buttonType="submit"
            buttonName="Save ToDo"
            btnClass="success"
          />
        </form>

      </div>
      <div className={styles.todoList}>
        <ToDoList
          todos={todoData}
          handleOnClick={getToDoDetail}
          updateToDos={arr => {
            setTodoData(arr);
          }}
        />
      </div>
    </div>
  );
};
export default ToDo;
