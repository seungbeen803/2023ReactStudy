import {useState} from 'react';

const Say = () => {
  // message를 멤버변수, setMessage에 의해서 message 값을 변경
  // [멤버변수, 함수]
  const [message, setMessage] = useState('');
  // message=안녕하세요!!
  const onClickEnter = () => setMessage('안녕하세요!!');
  // message=안녕히가세요!!
  const onClickLeave = () => setMessage('안녕히가세요!!');

  const [color, setColor] = useState("black");
  return(
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color:"red"}} onClick={() => setColor("red")}>빨간색</button>
      <button style={{color:"green"}} onClick={() => setColor("green")}>초록색</button>
      <button style={{color:"blue"}} onClick={() => setColor("blue")}>파란색</button>
    </div>
  )
}

export default Say;