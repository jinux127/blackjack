import Counter from './Counter';
// import './App.css';

function App() {

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  }
  return (
    <div className="App">
      <Counter {...counterProps} />      
    </div>
  );
}

export default App;
