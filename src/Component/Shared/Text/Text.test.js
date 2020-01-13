import React from "react";
import { shallow } from "enzyme";
import Text from "./Text";

describe("renders Text without crashing ", () => {
  const wrapper = shallow(<Text strong={true} />);
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
  it("Text component default return blank", () => {
    expect(wrapper.text()).toBe("");
  });
  it("Text class when strong props is true", () => {
    expect(wrapper.find("span").hasClass("footerHeading")).toEqual(true);
  });
  it("Snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
