import React from "react";

export default class Articles extends React.Component {
  render() {
    const list = this.props.articles.map((element, index) => {
      // TODO: improve this so we don't user innerHTML
      // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: element.body }} />
      );
    });

    return list;
  }
}
