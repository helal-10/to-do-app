import "./App.css";
import ToDoApp from "./components/toDoApp";
function App() {
  return (
    <>
      <div className="bg-white w-[30%] mx-auto rounded-md shadow-2xl p-4 max-sm:w-[100%] max-md:w-[80%] max-lg:w-[60%]">
        <ToDoApp />
      </div>
    </>
  );
}

export default App;
