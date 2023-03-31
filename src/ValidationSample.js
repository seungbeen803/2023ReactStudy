// ValidationSample.js
import { Component } from 'react';
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  // input박스에 값을 입력할 때 실행하는 메서드
  // 입력된 값이 password에 저장
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleChangeClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
      // 검증하기 버튼을 눌렀을 때 실행하는 메서드
      // 만약에 handleChange함수에서 "0000"을 입력했다고 가정하면
      // validated: "0000" === "0000",에서 "0000" == "0000" ---> true
      // validated는 true값을 가지게 된다.
      // handleChange함수에서 password에 "0000"이 저장
    });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}

          // className은 ValidationSample.css에 있는 클래스 이름(success, failure)
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleChangeClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;

// ref : 특정 태그에 기능을 주는 것