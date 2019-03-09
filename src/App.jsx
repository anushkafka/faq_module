import React from "react";
import Pagination from "./components/Pagination";
import Articles from "./components/Articles";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null
    };
  }

  getArticles() {
    return fetch(
      "https://support.zendesk.com/api/v2/help_center/en-us/articles.json"
    ).then(function(response) {
      return response.json();
    });
  }

  componentDidMount() {
    this.getArticles().then(articlesResponse => {
      console.log(articlesResponse);

      this.setState({
        articles: articlesResponse.articles,
        page: articlesResponse.page,
        perPage: articlesResponse.per_page,
        pageCount: articlesResponse.pageCount
      });
    });
  }

  render() {
    if (this.state.articles === null) {
      return <span>Loading...</span>;
    }

    console.log(this.state.articles);

    return (
      <div>
        <Pagination page={this.state.page} perPage={this.state.pageCount} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}
