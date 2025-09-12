//components
import Header from "./Header";
import Footer from "./Footer";
import ToDoTask from "./ToDoTask";
import { TasksContext } from "../contexts/tasksContext";
import EditTaskPopup from "./EditTaskPopup";

//others
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoProject() {
  const [taskValue, setTaskValue] = useState("");
  const [tasksTtiles, setTasksTitles] = useState([]);
  const [editState, setEditState] = useState({
    state: false,
    id: "",
  });
  const allTasks = tasksTtiles.map((t) => {
    return {
      title: t.title,
      id: uuidv4(),
      isCompleted: false,
    };
  });

  return (
    <TasksContext.Provider
      value={{
        allTasks,
        handleDeleteTaks,
        handleEditTasks,
        editState,
        handleShowEditPopup,
      }}
    >
      <div className="">
        <EditTaskPopup />
        <Header />
        <ToDoTask />
        <Footer
          taskValue={taskValue}
          changeTaskValue={changeTaskValue}
          handleAddNewTask={handleAddNewTask}
        />
      </div>
    </TasksContext.Provider>
  );

  function changeTaskValue(value) {
    setTaskValue(value);
  }
  function handleAddNewTask() {
    setTasksTitles([...tasksTtiles, { title: taskValue }]);
    setTaskValue("");
  }
  function handleDeleteTaks(updatedTasks) {
    console.log(updatedTasks);

    setTasksTitles(updatedTasks);
  }
  function handleShowEditPopup({ id, state }) {
    setEditState({ id, state });
  }
  function handleEditTasks({ id, state, confirm, newTitle }) {
    setEditState({ ...editState, state: state });
    const updatedTasks = tasksTtiles.map((t) => {
      if (t.id == id && confirm == true) {
        return { title: newTitle };
      }
      console.log("gggg");

      return t;
    });
    setTasksTitles(updatedTasks);
  }
}
