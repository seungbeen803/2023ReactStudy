// EventPractice.js
import { Component } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.vaule);
  const onChangeMessage = (e) => setMessage(e.target.vaule);

  const onClick = () => {
    alert(usernmae + " : " + message);
    setUsername("");
    setMessage("");
  };

  const onKeyDown = (e) => {
    if(e.key === "Enter") {
      onClick();
    }
  };

    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자 이름"
          value={this.state.username}
          onChange={this.handleChange}
          />
          <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          />
        <button
          onClick={this.handleClick}>확인</button>
      </div>
    );
}

export default EventPractice;
