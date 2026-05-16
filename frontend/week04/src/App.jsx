import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Prettier 적용 전</h1>
      <p>넘 번잡시럽고 복잡하지요?</p>
      <button
        onClick={() => {
          alert("버튼 클릭!");
        }}
      >
        클릭해보기
      </button>
      <div className="card">
        <h2>React Seminar</h2>
        <p>Prettier가 코드를 어떻게 정리하는지 확인해봅시다!</p>
      </div>
    </>
  );
}

export default App;
