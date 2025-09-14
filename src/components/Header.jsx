import { useContext } from "react";
import { TasksContext } from "../contexts/tasksContext";
export default function Header() {
  const task = useContext(TasksContext);
  return (
    <div style={{ direction: "rtl" }}>
      <h1 className="text-purple-200 text-5xl font-bold max-sm:text-[30px]">
        المهام
      </h1>
      <hr className="border-purtext-purple-200 mt-4" />
      <ul
        className={`flex justify-center items-center space-x-3 text-purple-200 mt-4 max-sm:text-[12px] `}
      >
        <li
          onClick={() => {
            task.handleFilteringTasks({
              all: true,
              done: false,
              notDone: false,
            });
          }}
          className={`li-btn ${task.active.all ? "active" : ""}`}
        >
          كل المهام
        </li>
        <li
          onClick={() => {
            task.handleFilteringTasks({
              all: false,
              done: true,
              notDone: false,
            });
          }}
          className={`li-btn ${task.active.done ? "active" : ""}`}
        >
          المهام المنجزه
        </li>
        <li
          onClick={() => {
            task.handleFilteringTasks({
              all: false,
              done: false,
              notDone: true,
            });
          }}
          className={`li-btn ${task.active.notDone ? "active" : ""}`}
        >
          المهام الغير منجزة
        </li>
      </ul>
    </div>
  );
}
