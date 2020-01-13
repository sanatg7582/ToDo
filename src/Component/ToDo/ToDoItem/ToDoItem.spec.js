import React from "react";
import { mount } from "enzyme";
import ToDoItem from "./ToDoItem";
import Text from "../../Shared/Text";
import ToDoStatus from "../ToDoStatus";
import ToDoCompleteStatus from "../ToDoCompleteStatus";
import ToDoAction from "../ToDoAction";
describe("Load <ToDoItem />", () => {
  let wrapper = "";
  const updateToDoStatus = jest.fn();
  const completeToDoStatus = jest.fn();
  const updateToDo = jest.fn();
  const removeToDo = jest.fn();
  beforeAll(() => {
    const props = {
      index: 0,
      todoHeading: "test",
      todoStatus: true,
      todoIsCompleteStatus: false,
      updateToDoStatus: updateToDoStatus,
      completeToDoStatus: completeToDoStatus,
      removeToDo: removeToDo,
      updateToDo: updateToDo,
      todo: {}
    };
    wrapper = mount(<ToDoItem {...props} />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
  it("checking button length", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("checking first todo text and todo props ", () => {
    expect(
      wrapper
        .find(Text)
        .find("span")
        .text()
    ).toEqual("test");
    expect(
      wrapper
        .find(Text)
        .find("span")
        .hasClass("footerHeading")
    ).toEqual(true);
  });
  it("checking ToDoStatus props", () => {
    wrapper
      .find(ToDoStatus)
      .find("button")
      .simulate("click");
    expect(updateToDoStatus).toHaveBeenCalled();
    expect(
      wrapper
        .find(ToDoStatus)
        .find("button")
        .hasClass("btn success")
    ).toEqual(true);
    wrapper.setProps({ todoStatus: false });
    expect(
      wrapper
        .find(ToDoStatus)
        .find("button")
        .hasClass("btn danger")
    ).toEqual(true);
    expect(wrapper.find("tr")).toHaveLength(1);
  });

  it("checking ToDoCompleteStatus props", () => {
    wrapper
      .find(ToDoCompleteStatus)
      .find("button")
      .simulate("click");
    expect(completeToDoStatus).toHaveBeenCalled();
    expect(
      wrapper
        .find(ToDoCompleteStatus)
        .find("button")
        .hasClass("btn danger")
    ).toEqual(true);
    wrapper.setProps({ todoIsCompleteStatus: true });
    expect(
      wrapper
        .find(ToDoCompleteStatus)
        .find("button")
        .hasClass("btn success")
    ).toEqual(true);
    expect(wrapper.find("tr")).toHaveLength(1);
  });

  it("checking ToDoAction edit button", () => {
    expect(wrapper.find(ToDoAction).find("button")).toHaveLength(2);
    expect(wrapper.find("tr")).toHaveLength(1);
    wrapper
      .find(ToDoAction)
      .find("button")
      .first()
      .simulate("click");
    expect(updateToDo).toHaveBeenCalled();
  });
  it("checking ToDoAction remove button", () => {
    wrapper
      .find(ToDoAction)
      .find("button")
      .last()
      .simulate("click");
    expect(removeToDo).toHaveBeenCalled();
  });
  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
