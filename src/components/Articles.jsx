import React from "react";
import ArticleCard from "./ArticleCard";

export default class Articles extends React.Component {
  render() {
    const list = this.props.articles.map((element, index) => {
      // TODO: improve this so we don't user innerHTML
      // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
      return <ArticleCard article={element} index={index} />;
    });

    return list;
  }
}
