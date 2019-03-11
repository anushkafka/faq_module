import React from "react";

export default class ArticleCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    if (!this.state.expanded) {
      return (
        <div className="ArticleCard">
          {this.props.article.name}{" "}
          <button onClick={this.handleToggle}>Show more...</button>
        </div>
      );
    }

    return (
      <div className="ArticleCard">
        <div
          key={this.props.index}
          dangerouslySetInnerHTML={{ __html: this.props.article.body }}
        />
        <button onClick={this.handleToggle}>Show less...</button>
      </div>
    );
  }
}
