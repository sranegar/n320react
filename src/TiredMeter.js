import "./styles.css";
import React from "react";

export default class TiredMeter extends React.Component {
  state = { tired: 420 };

  render() {
    return <div className="tired">
        <h1></h1>
        <p>
          I am level {this.state.tired} tired. Importance:
          (this.props.importance)
        </p>
      </div>
    );
  }
}
