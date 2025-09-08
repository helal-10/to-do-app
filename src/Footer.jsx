import { useState } from "react";

import Task from "./Task";
import ConfirmDeletePopUp from "./ConfirmDeletePopUp";
import EventIcons from "./EventIcons";
let count = 1;
export default function Footer() {
  const [taskValue, setTaskValue] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [popUpState, setPopUpState] = useState(false);
  const tasks = allTasks.map((t) => {
    return <Task key={t.id} title={t.title} handlePopUp={setPopUpState} />;
  });

  return (
    <>
      <ConfirmDeletePopUp state={popUpState} handleState={setPopUpState} />
      {tasks}
      <div className="flex justify-center items-center space-x-2 px-2 mt-6">
        <button
          onClick={addNewTask}
          className="flex-1 btn bg-red-900 cursor-pointer"
        >
          Add
        </button>
        <input
          onChange={handleStateValue}
          value={taskValue}
          type="text"
          className="flex-3 btn text-gray-700 font-bold"
          placeholder="Task Title"
        />
      </div>
    </>
  );

  function addNewTask() {
    setAllTasks([...allTasks, { id: count, title: taskValue }]);
    count++;
    setTaskValue("");
  }

  function handleStateValue(e) {
    setTaskValue(e.target.value);
  }
}
