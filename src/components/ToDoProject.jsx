//components
import Header from "./Header";
import Footer from "./Footer";
import ToDoTask from "./ToDoTask";
import EditTaskPopup from "./EditTaskPopup";
import DeleteTaskPopUp from "./DeleteTaskPopUp";

//others
import { useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ToDoProject() {
  const loaclStorageTasks = localStorage.getItem("t");
  const [taskValue, setTaskValue] = useState("");
  // set the localStorage values if there
  const [tasksTtiles, setTasksTitles] = useState(() => {
    return loaclStorageTasks ? JSON.parse(loaclStorageTasks) : [];
  });
  const [editState, setEditState] = useState({
    state: false,
    id: "",
    prevTitle: "",
    time: "",
    date: "",
  });

  const [deleteState, setDeleteState] = useState({
    state: false,
    isDeleted: false,
    updated: [],
  });
  // Filtering tasks States
  const [active, setActive] = useState({
    all: true,
    done: false,
    notDone: false,
  });

  // Filtering Tasks Values
  const all = tasksTtiles;
  const done = useMemo(() => {
    return tasksTtiles.filter((t) => t.isCompleted);
  }, [tasksTtiles]);
  const notDone = useMemo(() => {
    return tasksTtiles.filter((t) => !t.isCompleted);
  }, [tasksTtiles]);

  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-900 w-[50%] mx-auto rounded-md shadow-2xl p-4 max-sm:p-4 max-sm:w-[95%] max-md:w-[80%] max-lg:w-[60%]">
        <Header active={active} handleFilteringTasks={handleFilteringTasks} />
        <ToDoTask
          tasksTtiles={tasksTtiles}
          editState={editState}
          active={active}
          filteredTasks={{ all, done, notDone }}
          handlers={{
            handleDeleteTaks,
            handleEditTasks,
            handleShowEditPopup,
            hadnleDoneTasks,
          }}
        />
        <Footer
          taskValue={taskValue}
          changeTaskValue={changeTaskValue}
          handleAddNewTask={handleAddNewTask}
        />
      </div>
      <EditTaskPopup editState={editState} handleEditTasks={handleEditTasks} />
      <DeleteTaskPopUp
        deleteState={deleteState}
        handleConfirmDeleteTask={handleConfirmDeleteTask}
      />
    </>
  );

  function handleFilteringTasks(updatedFiltering) {
    setActive(updatedFiltering);
  }
  function changeTaskValue(value) {
    setTaskValue(value);
  }
  function handleAddNewTask({ time, date }) {
    const updatedTaskTitles = [
      ...tasksTtiles,
      {
        title: taskValue,
        id: uuidv4(),
        time: time,
        date: date,
        isCompleted: false,
      },
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
      localStorage.setItem("t", JSON.stringify(deleteState.updated));
    }
    setDeleteState({ ...deleteState, state: false });
  }
  function handleShowEditPopup({ id, state, prevTitle, time, date }) {
    setEditState({ id, state, prevTitle, time, date });
  }
  function handleEditTasks({ state, confirm, newTitle, newTime, newDate }) {
    setEditState({ ...editState, state: state });
    const updatedTasks = tasksTtiles.map((t) => {
      if (t.id == editState.id && confirm) {
        return {
          id: t.id,
          title: newTitle,
          time: newTime,
          date: newDate,
          isCompleted: t.isCompleted,
        };
      }

      return t;
    });
    setTasksTitles(updatedTasks);
    localStorage.setItem("t", JSON.stringify(updatedTasks));
  }
  function hadnleDoneTasks(id) {
    const updatedTasks = tasksTtiles.map((t) => {
      if (t.id == id) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });
    setTasksTitles(updatedTasks);
    localStorage.setItem("t", JSON.stringify(updatedTasks));
  }
}
