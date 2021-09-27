import React from "react";

export default class UserName extends React.Component {
  state = { uname: "" };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="username">
        <p>{this.state.uname}</p>
        <input value={this.state.uname} onChange={this.handleChange} />
      </div>
    );
  }
  handleChange(event) {
    this.setState({ uname: event.target.value });
  }
}
