import React from "react";
import _ from "lodash";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious() {
    this.props.onNewPage(this.props.page - 1);
  }

  handleNext() {
    this.props.onNewPage(this.props.page + 1);
  }

  render() {
    const shouldDisablePrevious = this.props.page === 1;
    const shouldDisableNext = this.props.page === this.props.pageCount;

    return (
      <div className="Pagination">
        <button onClick={this.handlePrevious} disabled={shouldDisablePrevious}>
          Previous
        </button>
        <span>Page: {this.props.page}</span>
        <button onClick={this.handleNext} disabled={shouldDisableNext}>
          Next
        </button>
      </div>
    );
  }
}
