import React from "react";
import { mount } from "enzyme";
import ToDoFilters from "./ToDoFilters";
import Input from "../../Shared/Input";
describe("Load <ToDoFilters />", () => {
  let wrapper = "";
  let setSearchtermfun = jest.fn();
  let handleOnClick = jest.fn();
  beforeAll(() => {
    const props = {
      handleOnClick: handleOnClick,
      filterActive: 0,
      setSearchtermfun: setSearchtermfun,
      searchterm: ""
    };
    wrapper = mount(<ToDoFilters {...props} />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
  it("checking TodoFilter length", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(3);
  });
  it("Checking button props", () => {
    expect(
      wrapper
        .find("button")
        .first()
        .props().className
    ).toEqual("btn success");
    wrapper.setProps({ filterActive: 1 });
    expect(
      wrapper
        .find("button")
        .first()
        .props().className
    ).toEqual("btn primary");
    wrapper.setProps({ filterActive: 2 });
    expect(
      wrapper
        .find("button")
        .first()
        .props().className
    ).toEqual("btn primary");
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().className
    ).toEqual("btn primary");
    expect(
      wrapper
        .find("button")
        .at(2)
        .props().className
    ).toEqual("btn success");
  });

  it("Checking search input class and value", () => {
    expect(wrapper.find(Input).find("input").props().value).toEqual("");
    expect(wrapper.find(Input).find("input").props().className).toEqual("formInput");
  });

  it("Checking Search onchange", () => {
    wrapper.find(Input).find("input").simulate("change");
    expect(setSearchtermfun).toHaveBeenCalled();
  });

  it("SnapShot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
