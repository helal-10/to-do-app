//components
import Header from "./Header";
import Footer from "./Footer";
import ToDoTask from "./ToDoTask";
import EditTaskPopup from "./EditTaskPopup";
import DeleteTaskPopUp from "./DeleteTaskPopUp";
import NotiBar from "./NotiBar";
import toDoReduce from "../reducers/toDoReduce";
//others
import { useState, useMemo, useReducer } from "react";

export default function ToDoProject() {
  const [taskValue, setTaskValue] = useState("");
  const [tasksTtiles2, dispatch] = useReducer(
    toDoReduce,
    // retrive the localStorage values if there
    localStorage.getItem("t") ? JSON.parse(localStorage.getItem("t")) : []
  );
  const [editState, setEditState] = useState({
    state: false,
    id: "",
    prevTitle: "",
    time: "",
    date: "",
  });

  const [deleteState, setDeleteState] = useState({
    updatedTasks: [],
    state: false,
  });
  // Filtering tasks States
  const [active, setActive] = useState({
    all: true,
    done: false,
    notDone: false,
  });

  // Filtering Tasks Values
  const all = tasksTtiles2;
  const done = useMemo(() => {
    return tasksTtiles2.filter((t) => t.isCompleted);
  }, [tasksTtiles2]);
  const notDone = useMemo(() => {
    return tasksTtiles2.filter((t) => !t.isCompleted);
  }, [tasksTtiles2]);

  const [toastDetails, setToastDetails] = useState({
    state: false,
    bgColor: "",
    text: "",
  });

  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-900 w-[50%] mx-auto rounded-md shadow-2xl p-4 max-sm:p-4 max-sm:w-[95%] max-md:w-[80%] max-lg:w-[60%]">
        <Header active={active} handleFilteringTasks={handleFilteringTasks} />
        <ToDoTask
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
          changeTaskValue={changeTaskInputValue}
          handleAddNewTask={handleAddNewTask}
        />
      </div>
      <EditTaskPopup editState={editState} handleEditTasks={handleEditTasks} />
      <DeleteTaskPopUp
        deleteState={deleteState}
        handleConfirmDeleteTask={handleConfirmDeleteTask}
      />
      <NotiBar values={toastDetails} />
    </>
  );
  function handleAddNewTask({ time, date }) {
    dispatch({
      type: "add",
      payload: {
        taskValue: taskValue,
        time: time,
        date: date,
      },
    });
    setTaskValue("");
  }
  function handleDeleteTaks(id) {
    const updatedTasks = tasksTtiles2.filter((t) => {
      return t.id != id;
    });
    setDeleteState({ updatedTasks: updatedTasks, state: true });
  }
  function handleConfirmDeleteTask(state) {
    if (state) {
      setToastDetails({
        state: true,
        bgColor: "bg-red-500",
        text: "تم حذف المهمة بنجاح",
      });
      const timeInterval = setInterval(() => {
        setToastDetails((e) => setToastDetails({ ...e, state: false }));
        clearInterval(timeInterval);
      }, 2000);
      dispatch({ type: "confirmDelete", payload: deleteState });
    }
    setDeleteState({ ...deleteState, state: false });
  }
  function handleEditTasks(editValues) {
    if (editValues.confirm) {
      setToastDetails({
        state: true,
        bgColor: "bg-purple-900",
        text: "تم تعديل المهمة بنجاح",
      });
      dispatch({
        type: "edit",
        payload: {
          id: editState.id,
          editValues: editValues,
        },
      });
    }
    setEditState({ ...editState, state: false });
  }
  function handleShowEditPopup(editValues) {
    setEditState(editValues);
  }
  function hadnleDoneTasks(id, isCompleted) {
    if (!isCompleted) {
      setToastDetails({
        state: true,
        bgColor: "bg-green-500",
        text: "تم إنجاز المهمة بنجاح",
      });
      const timeInterval = setInterval(() => {
        setToastDetails((e) => setToastDetails({ ...e, state: false }));
        clearInterval(timeInterval);
      }, 2000);
    }
    dispatch({
      type: "done",
      payload: {
        id: id,
        isCompleted: isCompleted,
      },
    });
  }

  function handleFilteringTasks(updatedFiltering) {
    setActive(updatedFiltering);
  }
  function changeTaskInputValue(value) {
    setTaskValue(value);
  }
}
