import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Footer({ handleAllTasks, updateTasks }) {
  const [taskValue, setTaskValue] = useState("");

  return (
    <>
      <div className="flex justify-center items-center space-x-2 px-2 mt-6">
        <button
          onClick={addNewTask}
          className="flex-1 btn bg-red-900 cursor-pointer"
        >
          Add
        </button>
        <input
          onChange={handleInputText}
          value={taskValue}
          type="text"
          className="flex-3 btn text-gray-700 font-bold"
          placeholder="Task Title"
        />
      </div>
    </>
  );

  function addNewTask() {
    updateTasks([
      ...handleAllTasks,
      { id: uuidv4(), title: taskValue, isCompleted: false },
    ]);

    setTaskValue("");
  }

  function handleInputText(e) {
    setTaskValue(e.target.value);
  }
}
