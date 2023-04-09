import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form id="todoForm" onSubmit={this.props.onTodoFormSubmit}>
          <input
            value={this.props.todoNameInput}
            onChange={this.props.todoInputChange}
            type="text"
            placeholder="New Todo"
          ></input>
          <input type="SUBMIT"></input>
        </form>
        <button onClick={this.props.toggleDisplayCompleted}>
          {this.props.displayCompleted ? "hide" : "show"} Completed
        </button>
      </>
    );
  }
}
