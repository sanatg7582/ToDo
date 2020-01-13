import React from "react";
import { mount } from "enzyme";
import ToDoList from "./ToDoList";
import ToDoStatus from "../ToDoStatus";
import ToDoCompleteStatus from "../ToDoCompleteStatus";
import ToDoAction from "../ToDoAction";
import ToDoFilters from "../ToDoFilters";
import ToDoItem from "../ToDoItem";
describe("Load <ToDoList />", () => {
  let wrapper = "";
  beforeAll(() => {
    const props = {
      todos: [{ todo: "test", status: true, isCompleted: false }]
    };
    wrapper = mount(<ToDoList {...props} />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Checking length", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("checking All toDo Filter button ", () => {
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(0)
        .hasClass("btn success")
    ).toEqual(true);
    wrapper
      .find(ToDoFilters)
      .find("button")
      .at(0)
      .simulate("click");
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(0)
        .hasClass("btn success")
    ).toEqual(true);
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(1)
        .hasClass("btn primary")
    ).toEqual(true);
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(2)
        .hasClass("btn primary")
    ).toEqual(true);
  });

  it("checking Active toDo Filter button ", () => {
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(1)
        .hasClass("btn primary")
    ).toEqual(true);
    wrapper
      .find(ToDoFilters)
      .find("button")
      .at(1)
      .simulate("click");
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(0)
        .hasClass("btn primary")
    ).toEqual(true);
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(1)
        .hasClass("btn success")
    ).toEqual(true);
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(2)
        .hasClass("btn primary")
    ).toEqual(true);
  });

  it("checking IsCompleted toDo Filter button ", () => {
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(2)
        .hasClass("btn primary")
    ).toEqual(true);
    wrapper
      .find(ToDoFilters)
      .find("button")
      .at(2)
      .simulate("click");
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(0)
        .hasClass("btn primary")
    ).toEqual(true);
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(1)
        .hasClass("btn primary")
    ).toEqual(true);
    expect(
      wrapper
        .find(ToDoFilters)
        .find("button")
        .at(2)
        .hasClass("btn success")
    ).toEqual(true);
  });

  it("checking table <th> mock data", () => {
    expect(
      wrapper
        .find("table")
        .find("thead")
        .find("tr")
        .find("th")
        .first()
        .text()
    ).toEqual("ToDo");
    expect(
      wrapper
        .find("table")
        .find("thead")
        .find("tr")
        .find("th")
        .at(1)
        .text()
    ).toEqual("Status");
    expect(
      wrapper
        .find("table")
        .find("thead")
        .find("tr")
        .find("th")
        .at(2)
        .text()
    ).toEqual("IsCompleted");
    expect(
      wrapper
        .find("table")
        .find("thead")
        .find("tr")
        .find("th")
        .at(3)
        .text()
    ).toEqual("Action");
  });

  // it("checking ToDoStatus button onclick change class", () => {
  //   const props = {
  //     todos: [{ todo: "test", status: true, isCompleted: false }]
  //   };
  //   wrapper = mount(<ToDoList {...props} />);
  //   expect(
  //     wrapper
  //       .find(ToDoStatus)
  //       .find("button")
  //       .hasClass("btn success")
  //   ).toEqual(true);
  //   wrapper
  //     .find(ToDoStatus)
  //     .find("button")
  //     .simulate("click");
  //   expect(
  //     wrapper
  //       .find(ToDoStatus)
  //       .find("button")
  //       .hasClass("btn danger")
  //   ).toEqual(true);
  //   expect(wrapper.find(ToDoItem)).toHaveLength(1);
  // });

  // it("checking ToDoCompleteStatus button onclick change class", () => {
  //   const props = {
  //     todos: [{ todo: "test", status: true, isCompleted: false }]
  //   };
  //   wrapper = mount(<ToDoList {...props} />);
  //   expect(
  //     wrapper
  //       .find(ToDoCompleteStatus)
  //       .find("button")
  //       .hasClass("btn danger")
  //   ).toEqual(true);
  //   wrapper
  //     .find(ToDoCompleteStatus)
  //     .find("button")
  //     .simulate("click");
  //   expect(
  //     wrapper
  //       .find(ToDoCompleteStatus)
  //       .find("button")
  //       .hasClass("btn success")
  //   ).toEqual(true);
  //   expect(wrapper.find(ToDoItem)).toHaveLength(1);
  // });

  it("checking ToDoAction button class", () => {
    const props = {
      todos: [{ todo: "test", status: true, isCompleted: false }]
    };
    wrapper = mount(<ToDoList {...props} />);
    expect(
      wrapper
        .find(ToDoAction)
        .find("button")
        .first()
        .hasClass("btn warning")
    ).toEqual(true);
    expect(
      wrapper
        .find(ToDoAction)
        .find("button")
        .last()
        .hasClass("btn danger")
    ).toEqual(true);
  });

  // it("checking remove todo click", () => {
  //   const props = {
  //     todos: [{ todo: "test", status: true, isCompleted: false }]
  //   };
  //   wrapper = mount(<ToDoList {...props} />);
  //   wrapper
  //     .find(ToDoAction)
  //     .find("button")
  //     .last()
  //     .simulate("click");
  //   expect(wrapper.find(ToDoItem)).toHaveLength(1);
  // });

  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
