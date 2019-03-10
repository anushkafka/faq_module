import React from "react";
import _ from "lodash";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentPage = null,
    //   pageCount = this.props.pageCount,
    //   perPage = this.props.perPage
    // }
  }

  setCurrentPage() {}

  render() {
    let pageNumbers = [];

    _.times(this.props.pageCount, function(i) {
      pageNumbers.push(<span style={{ margin: "5px" }}>{i.toString()}</span>);
    });

    return (
      <div>
        <div>{pageNumbers}</div>
      </div>
    );
  }
}
