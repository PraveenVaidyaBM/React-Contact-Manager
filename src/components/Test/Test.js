import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test",
  };

  componentDidMount() {}

  //   componentWilMount() {
  //     console.log("componentWillMount..");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate..");
  //   }

  //   componentWillUpdate() {
  //     console.log("componentWillUpdate..");
  //   }

  //   componentWillReceiveProps(nextState, prevState) {
  //     console.log("componentWillReceiveProps");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevProps) {}

  //   getSnapshotBeforeUpdate(prevState, nextState) {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
