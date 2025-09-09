import { useState } from "react";

import { tasks } from "../contexts/taskContext";
import Header from "./Header";
import Task from "./Task";
import Footer from "./Footer";


export default function ToDoApp() {
  const [popUpState, setPopUpState] = useState(false);

  const [allTasks, setAllTasks] = useState([]);
  return (
    <tasks.Provider value={allTasks}>
      <>

        <Header />
        <Task
          updateTasks={setAllTasks}
          handleAllTasks={allTasks}
          state={popUpState}
          handlePopUpState={setPopUpState}
        />
        <Footer updateTasks={setAllTasks} handleAllTasks={allTasks} />
      </>
    </tasks.Provider>
  );
}
