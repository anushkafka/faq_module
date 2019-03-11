import React from "react";
import { shallow } from "enzyme";
import ArticleCard from "./ArticleCard";

describe("ArticleCard Component", function() {
  it("Should display Show more button", function() {
    const fakeArticle = { name: "Fake article name" };
    const wrapper = shallow(<ArticleCard article={fakeArticle} />);
    expect(wrapper.text()).toContain("Show more...");
  });

  it("Should expand when Show more button is clicked", function() {
    const fakeArticle = { name: "Fake article name" };
    const wrapper = shallow(<ArticleCard article={fakeArticle} />);
    wrapper.setState({
      expanded: true
    });
    expect(wrapper.text()).toContain("Show less...");
  });

  it("Should collapse when Show less button is clicked", function() {
    const fakeArticle = { name: "Fake article name" };
    const wrapper = shallow(<ArticleCard article={fakeArticle} />);
    wrapper.setState({
      expanded: false
    });
    expect(wrapper.text()).toContain("Show more...");
  });
});
