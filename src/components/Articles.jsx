import React from "react";
import ArticleCard from "./ArticleCard";

export default class Articles extends React.Component {
  render() {
    const list = this.props.articles.map((article, index) => {
      return <ArticleCard article={article} index={index} key={index} />;
    });

    return list;
  }
}
