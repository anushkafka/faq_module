import React from "react";
import { shallow } from "enzyme";
import Articles from "./Articles";

describe("Articles Component", function() {
  it("should render all the articles", function() {
    const fakeArticles = [
      { name: "Article 1" },
      { name: "Article 2" },
      { name: "Article 3" }
    ];
    const wrapper = shallow(<Articles articles={fakeArticles} />);
    const articleCards = wrapper.find("ArticleCard");

    expect(articleCards.length).toEqual(fakeArticles.length);
  });
});
