import "./App.css";
import HandleDebounce from "./components/HandleDebounce";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700">
        <h1>React-useEffect-SearchDebounceApp</h1>
        <HandleDebounce />
      </div>
    </>
  );
}

export default App;
