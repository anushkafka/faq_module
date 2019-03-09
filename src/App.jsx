import React from "react";

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
    this.getArticles().then(articles => {
      this.setState({
        articles: articles
      });
    });
  }

  render() {
    if (this.state.articles === null) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        <select>
          <option key="1" />
        </select>
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}
