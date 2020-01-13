import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("Load <Button />", () => {
  let wrapper = "";
  const handleOnClickEvent = jest.fn();
  beforeAll(() => {
    const props = {
      buttonType: "button",
      buttonName: "save",
      btnClass: "success",
      children: <></>,
      handleOnClick: handleOnClickEvent,
      index: 0,
      status: false
    };
    wrapper = mount(<Button {...props} />);
    expect(wrapper).toBeTruthy();
  });
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
  it("Button length should be 1", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
  it("checking props", () => {
    expect(wrapper.find("button").props().type).toEqual("button");
    expect(wrapper.find("button").hasClass("btn success")).toEqual(true);
    expect(wrapper.find("button").type()).toEqual("button");
  });
  it("checking button click", () => {
    wrapper.find("button").simulate("click");
    expect(handleOnClickEvent).toHaveBeenCalled();
  });
  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
