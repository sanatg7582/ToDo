import React from "react";
import { shallow } from "enzyme";
import Icon from "./Icon";
import { IMAGE_PATH } from "../../../FooterData";

describe("renders Icon without crashing ", () => {
  const props = {
    fileName: "",
    altTitle: ""
  };
  const wrapper = shallow(<Icon {...props} />);
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Image root path should be same", () => {
    expect(wrapper.find("img").prop("src")).toBe(`${IMAGE_PATH}`);
  });

  it("Snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
