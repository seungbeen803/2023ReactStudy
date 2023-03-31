import React, { Component } from "react";
class RefSample extends Component {
  // 멤버변수로 React.createRef()에 의해서 ref생성하기
  input = React.createRef();
  handleFocus = () => {
    this.input.current.focus();
  };
  render() {
    return (
      <div>
        {/* ref는 input태그에 React.createRef()에서 생성한 값으로 넣어주기 */}
        <input ref={this.input} />
        <button onClick={this.handleFocus}>Click</button>
      </div>
    );
  }
}
export default RefSample;