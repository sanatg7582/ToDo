import React from "react";
import { mount } from "enzyme";
import ToDoCompleteStatus from "./ToDoCompleteStatus";
describe("Load <ToDoCompleteStatus />", () => {
  let wrapper = "";
  beforeAll(() => {
    const props = {
      isCompleteStatus: false,
      handleOnClick: () => {},
      index: 0
    };
    wrapper = mount(<ToDoCompleteStatus {...props} />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
  it("checking button length", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
  it("checking props", () => {
    // todo status true
    expect(wrapper.find("button").hasClass("btn danger")).toEqual(true);
    expect(wrapper.props().isCompleteStatus).toEqual(false);

    // todo status wrong
    wrapper.setProps({ isCompleteStatus: true });
    expect(wrapper.find("button").hasClass("btn success")).toEqual(true);
    expect(wrapper.props().isCompleteStatus).toEqual(true);
  });
  it("Checking button click", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.props().isCompleteStatus).toEqual(true);
  });
  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
