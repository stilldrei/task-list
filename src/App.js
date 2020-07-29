import React from "react";
import "./App.css";

import { List } from "./components/list/list.component";
import { AddTask } from "./components/add-task/add-task.component";
import { LogBookList } from "./components/logbook-list/logbook-list.component";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [
        { id: 1, name: "Cook breakfast", checked: false },
        { id: 2, name: "Clean room", checked: false },
      ],
      logbook: [],
      addTextField: "",
    };
  }

  handleFieldChange = (e) => {
    this.setState({ addTextField: e.target.value });

    if (e.key === "Enter") {
      let taskName = this.state.addTextField.trim();
      const list = this.state.list;
      if (taskName.length !== 0) {
        let id = 1;
        if (list.length !== 0) {
          const [lastItem] = list.slice(-1);
          id = lastItem.id + 1;
        }

        let newTask = {
          id: id,
          name: taskName,
          checked: false,
        };

        list.push(newTask);
        this.setState({ list: list });
        e.target.value = "";
        this.setState({ addTextField: "" });
      }
    }
  };

  handleTickTask = (e) => {
    const taskId = Number(e.target.value);
    const list = this.state.list;
    list.forEach((item) => {
      if (item.id === taskId) {
        item.checked = e.target.checked;
      }
    });

    const finishedTasks = list.filter((item) => item.checked === true).sort();
    this.setState({ list: list });
    this.setState({ logbook: finishedTasks });
  };

  handleDeleteTask = (e) => {
    const taskId = Number(e.target.value);
    const list = this.state.list;
    let index = list.findIndex((item) => item.id === taskId);
    list.splice(index, 1);

    const finishedTasks = list.filter((item) => item.checked === true).sort();
    this.setState({ list: list });
    this.setState({ logbook: finishedTasks });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {" "}
          <h2>Task List</h2>{" "}
        </header>
        <AddTask handleFieldChange={this.handleFieldChange} />
        <List
          list={this.state.list}
          handleTickTask={this.handleTickTask}
          handleDeleteTask={this.handleDeleteTask}
        />
        <LogBookList list={this.state.logbook} />
      </div>
    );
  }
}

export default App;
