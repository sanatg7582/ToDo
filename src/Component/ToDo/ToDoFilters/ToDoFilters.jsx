import React from "react";
import PropTypes from "prop-types";
import styles from "./ToDoFilters.module.scss";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
/**
 * This function for return filter button
 * @param {func} handleOnClick
 * @param {number} filterActive
 * @param {func} setSearchtermfun
 * @param {func} searchterm
 * @returns Element
 */
const ToDoFilters = props => {
  const { handleOnClick, filterActive, setSearchtermfun, searchterm } = props;
  return (
    <div className={styles.filterContainer}>
      <div className={styles.buttonSection} >
        <Button
          buttonType="button"
          buttonName="All"
          btnClass={filterActive === 0 ? "success" : "primary"}
          handleOnClick={() => handleOnClick()}
          status={filterActive === 0 ? true : false}
          index={0}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
      <Button
          buttonType="button"
          buttonName="Active"
          btnClass={filterActive === 1 ? "success" : "primary"}
          handleOnClick={() => handleOnClick(1)}
          status={filterActive === 1 ? true : false}
          index={1}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
      <Button
          buttonType="button"
          buttonName="Is Completed"
          btnClass={filterActive === 2 ? "success" : "primary"}
          handleOnClick={() => handleOnClick(2)}
          status={filterActive === 2 ? true : false}
          index={2}
        />
      </div>
      <div className={styles.searchSection}>
        <Input InputType="text" InputName="searchterm" InputValue={searchterm} placeholder="search" handleChange={(e) => { setSearchtermfun(e.target.value) }} />
      </div>
    </div>
  );
};
// default props value
ToDoFilters.defaultProps = {
  handleOnClick: () => { },
  filterActive: 0
};
// prop type validation
ToDoFilters.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  filterActive: PropTypes.number
};
export default ToDoFilters;
