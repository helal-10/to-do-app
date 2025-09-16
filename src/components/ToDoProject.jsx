//components
import Header from "./Header";
import Footer from "./Footer";
import ToDoTask from "./ToDoTask";
import { TasksContext } from "../contexts/TasksContext";
import EditTaskPopup from "./EditTaskPopup";
import DeleteTaskPopUp from "./DeleteTaskPopUp";

//others
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoProject() {
  const loaclStorageTasks = JSON.parse(localStorage.getItem("t"));
  const [taskValue, setTaskValue] = useState("");
  const [tasksTtiles, setTasksTitles] = useState(loaclStorageTasks);
  const [editState, setEditState] = useState({
    state: false,
    id: "",
  });
  const [deleteState, setDeleteState] = useState({
    state: false,
    isDeleted: false,
    updated: [],
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

  localStorage.setItem("t", JSON.stringify(tasksTtiles));

  return (
    <TasksContext.Provider
      value={{
        tasksTtiles,
        loaclStorageTasks,
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
        deleteState,
        handleConfirmDeleteTask,
      }}
    >
      <>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-900 w-[30%] mx-auto rounded-md shadow-2xl p-4 max-sm:w-[80%] max-md:w-[80%] max-lg:w-[60%]">
          <Header />
          <ToDoTask />
          <Footer
            taskValue={taskValue}
            changeTaskValue={changeTaskValue}
            handleAddNewTask={handleAddNewTask}
          />
        </div>
        <EditTaskPopup />
        <DeleteTaskPopUp />
      </>
    </TasksContext.Provider>
  );

  function handleFilteringTasks(updatedFiltering) {
    setActive(updatedFiltering);
  }
  function changeTaskValue(value) {
    setTaskValue(value);
  }
  function handleAddNewTask() {
    const updatedTaskTitles = [
      ...tasksTtiles,
      { title: taskValue, id: uuidv4(), isCompleted: false },
    ];
    setTasksTitles(updatedTaskTitles);

    localStorage.setItem("t", JSON.stringify(updatedTaskTitles));

    setTaskValue("");
  }
  function handleDeleteTaks(updatedTasks) {
    setDeleteState(updatedTasks);
  }
  function handleConfirmDeleteTask(state) {
    if (state) {
      setTasksTitles(deleteState.updated);
    }
    setDeleteState({ ...deleteState, state: false });
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
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });
    setTasksTitles(updatedTasks);
  }
}
