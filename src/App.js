import './App.css';

function App() {
  const name = '리액트';
  return (
  <div 
    style={{ // 첫 번째 괄호는 js코드, 두번째 코드는 style 태그를 감싸주는 것
      backgroundColor : 'yellow', // background-Color -> backgroundColor로 표현(카멜표기법)
      color : 'aqua',
      fontSize : '48px',
      fontWeight : 'bold',
      padding : 16 // 단위가 px
    }}
  >
    name
  </div>
 );
}

export default App;
