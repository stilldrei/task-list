import React from "react";

import { Task } from "../task/task.component";
import "./list.styles.css";

export class List extends React.Component {
  constructor(props) {
    super();

    this.list = props.list;
    this.handleTickTask = props.handleTickTask;
    this.handleDeleteTask = props.handleDeleteTask;
  }

  render() {
    return (
      <div className="task-list">
        {this.list.map((item) => (
          <Task
            key={item.id}
            task={item}
            handleTickTask={this.handleTickTask}
            handleDeleteTask={this.handleDeleteTask}
          />
        ))}
      </div>
    );
  }
}
