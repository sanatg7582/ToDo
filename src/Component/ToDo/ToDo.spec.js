import React from "react";
import { mount } from "enzyme";
import ToDo from "./ToDo";
import ToDoItem from "./ToDoItem";
import Text from "../Shared/Text";
import ToDoList from "./ToDoList";
import ToDoAction from "./ToDoAction";
describe("Load <ToDo />", () => {
  let wrapper = "";
  beforeAll(() => {
    wrapper = mount(<ToDo />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Checking form length", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });
  it("todo form submit", () => {
    wrapper
      .find("form")
      .find("button")
      .simulate("submit");
    expect(wrapper.find(ToDoItem)).toHaveLength(2);


  });
  it("checking input props", () => {
    expect(
      wrapper
        .find("form")
        .find("input")
        .props().type
    ).toEqual("text");
    wrapper
      .find("form")
      .find("input")
      .simulate("change");
    expect(
      wrapper
        .find("form")
        .find("input")
        .props().value
    ).toBe("");
  });
  it("Checking toDo loop value ", () => {
    expect(
      wrapper
        .find(ToDoItem)
        .find(Text)
        .first()
        .find("span")
        .text()
    ).toEqual("test");
  });
  it("checking ToDo detail", () => {
    wrapper
      .find(ToDoList)
      .find(ToDoAction)
      .find("button")
      .first()
      .simulate("click");
    expect(
      wrapper
        .find("form")
        .find("input")
        .props().value
    ).toBe("test");
  });
  it("ds", () => {
    const mock = jest.fn().mockImplementation(() => "bar");
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  })
  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
