import React from "react";

export default class Pagination extends React.Component {
  render() {
    return <div>Current page is {this.props.page}</div>;
  }
}
