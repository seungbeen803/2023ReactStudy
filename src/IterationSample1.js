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
      // nextId 값을 1 증가
      setNextId(nextId + 1);
      // nextNames는 추가된 데이터이고 names에게 값을 변경한다.
      setNames(nextNames);
      // inputText를 비운다.
      setInputText("");
    };

  // 더블클릭한 id값과 nextNames에 있는 전체데이터와 비교하여
  // id가 같은 제외한 나머지 데이터를 nextNames에 저장한다.
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  }
  const nameList = names.map((name) => (

    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};
export default IterationSample1;