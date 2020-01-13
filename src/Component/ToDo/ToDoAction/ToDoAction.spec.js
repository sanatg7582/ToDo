import React from "react";
import { mount } from "enzyme";
import ToDoAction from "./ToDoAction";

describe("Load <ToDoAction />", () => {
  let wrapper = "";
  const handleOnClickUpdate = jest.fn();
  const handleOnClickRemove = jest.fn();
  beforeAll(() => {
    const props = {
      handleOnClickUpdate: handleOnClickUpdate,
      handleOnClickRemove: handleOnClickRemove,
      index: 0
    };
    wrapper = mount(<ToDoAction {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("checking button length", () => {
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("checking first button props", () => {
    expect(
      wrapper
        .find("button")
        .first()
        .type()
    ).toEqual("button");
    expect(
      wrapper
        .find("button")
        .first()
        .hasClass("btn warning")
    ).toEqual(true);
  });
  it("Checking last button props", () => {
    expect(
      wrapper
        .find("button")
        .last()
        .type()
    ).toEqual("button");
    expect(
      wrapper
        .find("button")
        .last()
        .hasClass("btn danger")
    ).toEqual(true);
  });
  it("checking first button click", () => {
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(handleOnClickUpdate).toHaveBeenCalled();
  });
  it("checking last button click", () => {
    wrapper
      .find("button")
      .last()
      .simulate("click");
    expect(handleOnClickRemove).toHaveBeenCalled();
  });
  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
