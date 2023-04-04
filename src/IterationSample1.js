// IterationSample.js
import { useState } from "react";
const IterationSample1 = () => {
  const [names, setNames] = // eslint-disable-line no-unused-vars
    useState([
      { id: 1, text: "눈사람" },
      { id: 2, text: "얼음" },
      { id: 3, text: "눈" },
      { id: 4, text: "바람" },
    ]);

  // nextId에 5를 저장. 새로운 항목을 추가하기 위해서 사용할 id
  // [변수, 함수]
  const [inputText, setInputText] = useState(""); // eslint-disable-line no-unused-vars
  const [nextId, setNextId] = useState(5); // eslint-disable-line no-unused-vars
  // 새로운 항목을 추가할때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = // eslint-disable-line no-unused-vars
    () => {
      const nextNames = names.concat({
        id: nextId,
        text: inputText,
      });
      // nextId에 1을 더해준다.
      setNextId(nextId + 1);
      // names 값을 업데이트한다.
      setNames(nextNames);
      // inputText를 비운다.
      setInputText("");
    };




  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};
export default IterationSample1;