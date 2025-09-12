//components
import ToDoProject from "./components/ToDoProject";

import "./App.css";
function App() {
  return (
    <>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-900 w-[30%] mx-auto rounded-md shadow-2xl p-4 max-sm:w-[80%] max-md:w-[80%] max-lg:w-[60%]">
        <ToDoProject />
      </div>
    </>
  );
}

export default App;
