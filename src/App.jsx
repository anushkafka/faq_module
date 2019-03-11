import React from "react";
import Pagination from "./components/Pagination";
import Articles from "./components/Articles";
import api from "./utility/api";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadArticles = this.loadArticles.bind(this);
    this.handleNewPage = this.handleNewPage.bind(this);

    this.state = {
      articles: null
    };
  }

  // 1. get articles from api
  // 2. and assign articles to state
  loadArticles(page) {
    api.getArticlesFromAPI(page).then(response => {
      const newState = {
        articles: response.articles,
        page: response.page,
        perPage: response.per_page,
        pageCount: response.page_count
      };

      this.setState(newState);
    });
  }

  componentDidMount() {
    this.loadArticles(1);
  }

  handleNewPage(page) {
    this.loadArticles(page);
  }

  render() {
    if (this.state.articles === null) {
      return <span>Loading...</span>;
    }

    return (
      <div className="ArticleApp">
        <Pagination
          page={this.state.page}
          perPage={this.state.perPage}
          pageCount={this.state.pageCount}
          onNewPage={this.handleNewPage}
        />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}
