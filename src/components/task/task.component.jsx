import React from "react";

import "./task.styles.css";

export class Task extends React.Component {
  constructor(props) {
    super();

    this.task = props.task;
    this.handleTickTask = props.handleTickTask;
    this.handleDeleteTask = props.handleDeleteTask;
  }

  getLabel = (task) => {
    return task.checked ? (
      <span className="checked"> {task.name} </span>
    ) : (
      <span> {task.name} </span>
    );
  };

  render() {
    return (
      <div className="task-item">
        <p>
          <input
            type="checkbox"
            value={this.task.id}
            defaultChecked={this.task.checked}
            onChange={this.handleTickTask}
          />
          {this.getLabel(this.task)}
          <button value={this.task.id} onClick={this.handleDeleteTask}>
            {" "}
            &#10006;{" "}
          </button>
        </p>
      </div>
    );
  }
}
