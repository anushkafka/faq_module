import React from "react";
import { shallow } from "enzyme";
import Pagination from "./Pagination";

describe("Pagination Component", function() {
  it("Should disable previous button when on first page", function() {
    const fakePage = 1;
    const wrapper = shallow(<Pagination page={fakePage} />);
    const previousBtn = wrapper.find(".previous-btn");
    expect(previousBtn.props().disabled).toEqual(true);
  });

  it("Should disable next button when on last page", function() {
    const fakePageCount = 10;
    const fakePage = fakePageCount;
    const wrapper = shallow(
      <Pagination page={fakePage} pageCount={fakePageCount} />
    );
    const nextBtn = wrapper.find(".next-btn");
    expect(nextBtn.props().disabled).toEqual(true);
  });
});
