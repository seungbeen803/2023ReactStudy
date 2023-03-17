import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props); // 반드시 호출

    // state의 초깃값 설정
    this.state = { 
      number : 0
    };
  }
  render() {
    const {number} = this.state; // state를 조회할 때 this.state로 한다.
    // this.state는 생성자에서 설정한 값을 가져와서
    // const {number}에서 number에 저장
    return (
      <div>
        <h1> { number } </h1>
        <button
        // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick = { () => {
            // this.state를 사용하여 state에 새로운 값을 넣을 수 있다.
            // setState메서드에 의해서만 state(number)
            // 값을 변경할 수 있다.
            this.setState({number: number+1});
          }
        }
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;