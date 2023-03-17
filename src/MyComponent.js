// MyComponent.js
// function ----> = () => { }
// function MyComponent { }
import { Component } from "react";
import PropTypes from "prop-types"

class MyComponent extends Component {
  render() {
    // this.props를 통해서 속성을 조회한다
    // name, favoriteNumber, children에 값이 저장된다.
    const { name, favoriteNumber, children } = this.props;
    return (
      <div> 
        안녕하세요. 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br/>
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
};

MyComponent.defaultProps =  {
  name : "기본이름",
};
MyComponent.propTypes = {
  name: PropTypes.string,
  // 무조건 문자열 형태로 전달해야 한다.
  favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponent;