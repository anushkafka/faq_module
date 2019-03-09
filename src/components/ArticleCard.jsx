import React from "react";

export default class ArticleCard extends React.Component {
  render() {
    return (
      <div
        key={this.props.index}
        dangerouslySetInnerHTML={{ __html: this.props.article.body }}
      />
    );
  }
}
