import React from "react";
import { shallow } from "enzyme";
import App from "./App";

jest.mock("./utility/api", function() {
  return {
    getArticlesFromAPI: function(page) {
      const fakeResult = {};

      return new Promise(function(resolve, reject) {
        resolve(fakeResult);
      });
    }
  };
});

describe("App Component", function() {
  it("should display a loading message on first render", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toContain("Loading...");
  });

  it("should display articles when they are set in state", function() {
    const wrapper = shallow(<App />);

    const fakeArticles = ["article 1", "article 2", "article 3"];
    const fakePage = 42;

    wrapper.setState({
      articles: fakeArticles,
      page: fakePage,
      perPage: 10,
      pageCount: 4220
    });

    expect(wrapper.find("Pagination").prop("page")).toBe(fakePage);
    expect(wrapper.find("Articles").prop("articles")).toBe(fakeArticles);
  });

  it("should load articles when a new page is requested", function() {
    const wrapper = shallow(<App />);

    // make the App be in a loaded state
    wrapper.setState({
      articles: ["article 1", "article 2", "article 3"],
      page: 42,
      perPage: 10,
      pageCount: 4220
    });

    const fakeNewPage = 5;

    const onNewPageFn = wrapper.find("Pagination").prop("onNewPage");

    const mockLoadArticles = jest.fn();
    wrapper.instance().loadArticles = mockLoadArticles;

    onNewPageFn(fakeNewPage);

    expect(mockLoadArticles).toBeCalledWith(fakeNewPage);
  });
});
