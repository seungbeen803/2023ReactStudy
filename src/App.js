import './App.css';

function App() {
  const name = 'React2';
  return (
    <div>
      { name === '리액트' ? (
        <h1> {name} 안녕 </h1>
      ) : (
      <h2> 잘 작동하니? </h2>
      )}
    </div>
  );
}

export default App;
