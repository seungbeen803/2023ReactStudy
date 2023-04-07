// ErrorBoundary.js
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // 에러가 발생하면 아래 메서드가 호출되며, error 값을 true로 변경
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>에러가 발생했습니다.</div>
    return this.props.children;
  }
}
export default ErrorBoundary

