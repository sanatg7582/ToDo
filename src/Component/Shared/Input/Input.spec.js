import React from "react";
import { mount } from "enzyme";
import Input from "./Input";
describe("Load <Input />", () => {
  let wrapper = "";
  beforeAll(() => {
    const props = {
      InputLabel: "ToDo",
      InputType: "text",
      InputName: "todo",
      IsRequired: true,
      handleChange: () => {},
      InputValue: "",
      InputMaxlength: "30"
    };
    wrapper = mount(<Input {...props} />);
    expect(wrapper).toBeTruthy();
  });
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
  it("Input length should be 1", () => {
    expect(wrapper).toHaveLength(1);
  });
  it("checking props", () => {
    expect(
      wrapper
        .find(".InputContainer")
        .find("label")
        .text()
    ).toEqual("ToDo :- ");
    expect(
      wrapper
        .find(".InputContainer")
        .find("input")
        .props().required
    ).toEqual(true);
    expect(
      wrapper
        .find(".InputContainer")
        .find("input")
        .props().type
    ).not.toBe("");
    expect(
      wrapper
        .find(".InputContainer")
        .find("input")
        .type()
    ).toEqual("input");
    expect(
      wrapper
        .find(".InputContainer")
        .find("input")
        .simulate("click")
    );
  });
  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
