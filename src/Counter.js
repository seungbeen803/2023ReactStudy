import { Component } from 'react';

class Counter extends Component {
    state = { 
      number : 0,
      fixedNumber : 0
    };
    
  // 생성자 작성없이 state문을 작성하면 초깃값을 설정할 수 있도록
  // 내부적으로 생성자가 실행되고 있음
  render() {
    // this.state는 생성자에서 설정한 값을 조회해서
    // number, fixedNumber 값을 저장
    const {number, fixedNumber} = this.state;
    // this.state는 생성자에서 설정한 값을 가져와서
    // const {number}에서 number에 저장
    return (
      <div>
        <h1> { number } </h1>
        <h2> 바뀌지 않는 값: {fixedNumber} </h2>
        <button
        // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick = { () => {
            // this.state를 사용하여 state에 새로운 값을 넣을 수 있다.
            // setState메서드에 의해서만 state(number)
            // 값을 변경할 수 있다.
            this.setState({number: number+1});
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;