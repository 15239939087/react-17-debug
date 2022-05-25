/**
 * Author: NERO
 * Date: 2020/7/25 0025
 * Time: 11:22
 *
 */
import React, { useState } from "react";
import "./index.css";

const Child3 = ({ count }) => {
  return (
    <div>
      <span>Child3: {count}</span>
      <span>Child3: {count}</span>
    </div>
  );
};
class Child2 extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0,
    };
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }
  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    // console.log(this.state.val);    // 第 1 次 log

    this.setState({ val: this.state.val + 1 });
    // console.log(this.state.val);    // 第 2 次 log

    // setTimeout(() => {
    //   this.setState({val: this.state.val + 1});
    //   // console.log(this.state.val);  // 第 3 次 log
    //
    //   this.setState({val: this.state.val + 1});
    //   // console.log(this.state.val);  // 第 4 次 log
    // }, 0);
  }
  add = () => {
    this.setState({ val: 2 });
    this.setState({ val: 6 });
  };
  render() {
    const { countFormParent } = this.props;
    return (
      <>
        <div className={"Child2"} onClick={this.add}>
          <div>{countFormParent}</div>
          <Child3 count={countFormParent} />
        </div>
      </>
    );
  }
}

const AppSibling = (props) => {
  return (
    <div className={"AppSibling"}>
      <span className={"child1-span"}>Child1: {props.count}</span>
      <Child3 count={props.count} />
      <Child3 count={props.count} />
      <Child3 count={props.count} />
      <Child3 count={props.count} />
    </div>
  );
};

export default AppSibling;
