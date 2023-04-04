// IterationSample.js
const IterationSample = () => {
  // names 배열 변수에 데이터를 저장
  const names = ["눈사람", "얼음", "눈", "바람"];
  // names 배열에 있는 데이터를 한 개씩 순차적으로 출력하는
  // 데이터를 nameList 변수에 저장
  // 배열의 index 값을 key 값으로 설정할 때 배열이 변경되면 렌더링을 하지 못하는 경우가 발생
  // 배열의 index 값을 key 값으로 하는 것은 바람직하지 않다
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};
export default IterationSample;