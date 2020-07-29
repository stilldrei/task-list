import React from "react";

import "./logbook-list.styles.css";

export class LogBookList extends React.Component {
  constructor(props) {
    super();

    this.props = props;
  }

  getCompletedList(list) {
    if (list.length > 0) {
      return list.map((item, key) => (
        <p key={item.id}>
          <span className="bullet">&#8226;</span>
          <span>{item.name}</span>
        </p>
      ));
    } else {
      return <p> No completed tasks. </p>;
    }
  }

  render() {
    return (
      <div className="logbook-list">
        <h3> Completed: </h3>
        {this.getCompletedList(this.props.list)}
      </div>
    );
  }
}
