//components
import Header from "./Header";
import Footer from "./Footer";
import ToDoTask from "./ToDoTask";
import { TasksContext } from "../contexts/tasksContext";
import EditTaskPopup from "./EditTaskPopup";

//others
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoProject() {
  const [taskValue, setTaskValue] = useState("");
  const [tasksTtiles, setTasksTitles] = useState([]);
  const [editState, setEditState] = useState({
    state: false,
    id: "",
  });
  // Filtering tasks
  const [active, setActive] = useState({
    all: true,
    done: false,
    notDone: false,
  });
  const all = tasksTtiles;
  const done = tasksTtiles.filter((t) => t.isCompleted == true);
  const notDone = tasksTtiles.filter((t) => t.isCompleted == false);

  return (
    <TasksContext.Provider
      value={{
        tasksTtiles,
        all,
        done,
        notDone,
        active,
        handleDeleteTaks,
        handleEditTasks,
        editState,
        handleShowEditPopup,
        handleFilteringTasks,
        hadnleDoneTasks,
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

  function handleFilteringTasks(updatedFiltering) {
    setActive(updatedFiltering);
  }
  function changeTaskValue(value) {
    setTaskValue(value);
  }
  function handleAddNewTask() {
    setTasksTitles([
      ...tasksTtiles,
      { title: taskValue, id: uuidv4(), isCompleted: false },
    ]);
    setTaskValue("");
  }
  function handleDeleteTaks(updatedTasks) {
    setTasksTitles(updatedTasks);
  }
  function handleShowEditPopup({ id, state, prevTitle }) {
    setEditState({ id, state, prevTitle });
  }
  function handleEditTasks({ state, confirm, newTitle }) {
    setEditState({ ...editState, state: state });
    const updatedTasks = tasksTtiles.map((t) => {
      if (t.id == editState.id && confirm) {
        return { id: t.id, title: newTitle, isCompleted: t.isCompleted };
      }

      return t;
    });
    setTasksTitles(updatedTasks);
  }
  function hadnleDoneTasks(id) {
    const updatedTasks = tasksTtiles.map((t) => {
      if (t.id == id) {
        return { ...t, isCompleted: true };
      }
      return t;
    });
    setTasksTitles(updatedTasks);
  }
}
