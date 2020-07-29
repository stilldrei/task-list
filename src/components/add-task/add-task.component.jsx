import React from "react";

import "./add-task.styles.css";

export class AddTask extends React.Component {
  constructor(props) {
    super();

    this.handleFieldChange = props.handleFieldChange;
    this.handleSearchChange = props.handleSearchChange;
  }

  render() {
    return (
      <div className="add-task-container">
        <div className="add-task-row">
          <div className="add-task">
            <input
              type="text"
              placeholder="What do you want to do today?"
              onKeyDown={this.handleFieldChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
