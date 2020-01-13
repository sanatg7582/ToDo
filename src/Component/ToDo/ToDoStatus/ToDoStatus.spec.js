import React from "react";
import { mount } from "enzyme";
import ToDoStatus from "./ToDoStatus";
describe("Load <ToDoStatus />", () => {
  let wrapper = "";
  beforeAll(() => {
    const props = {
      todoStatus: true,
      handleOnClick: () => {},
      index: 0
    };
    wrapper = mount(<ToDoStatus {...props} />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
  it("checking button length", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
  it("checking props ", () => {
    // todo status true
    expect(wrapper.find("button").hasClass("btn success")).toEqual(true);
    expect(wrapper.props().todoStatus).toEqual(true);
    // todo status false
    wrapper.setProps({ todoStatus: false });
    expect(wrapper.find("button").hasClass("btn danger")).toEqual(true);
    expect(wrapper.props().todoStatus).toEqual(false);
  });

  it("checking button click", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("button").hasClass("btn danger")).toEqual(true);
  });

  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
