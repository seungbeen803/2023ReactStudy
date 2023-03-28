// EventPractice.js
import { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  // username 값을 변경
  const onChangeUsername = (e) => setUsername(e.target.vaule);
  // message 값을 변경
  const onChangeMessage = (e) => setMessage(e.target.vaule);

  const onClick = () => {
    alert(username + " : " + message);
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
          value={username}
          onChange={onChangeUsername}
          />
          <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={message}
          onChange={onChangeMessage}
          onKeyDown={onKeyDown}
          />
        <button onClick={onClick}>확인</button>
      </div>
    );
}

export default EventPractice;
