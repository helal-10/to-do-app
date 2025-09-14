// MUI icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
//component
import { TasksContext } from "../contexts/TasksContext";
//other
import { useContext } from "react";
export default function ToDoTask() {
  const tasksContext = useContext(TasksContext);
  let tasks = [];
  if (tasksContext.active.all) {
    tasks = tasksContext.all.map((t) => {
      if (t.title) {
        return (
          <div
            key={t.id}
            className="bg-[#d9d9d9] w-[100%] border border-solid border-purple-950 mx-auto rounded-sm shadow-2xl mt-4 p-4 flex justify-between items-center"
          >
            <div className="space-x-3">
              <DeleteOutlineIcon
                onClick={() => {
                  handleDeleteClick(t.id);
                }}
                className="bg-white border border-solid border-red-500 text-red-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
              <CheckIcon
                onClick={(e) => {
                  handleCheckClick(t.id, e);
                }}
                className="bg-white border border-solid border-green-500 text-green-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
              <ModeOutlinedIcon
                onClick={() => {
                  handleEditClick(t.id, t.title);
                }}
                className="bg-white border border-solid border-purple-500 text-purple-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black max-sm:text-[16px]">
                {t.title}
              </h1>
            </div>
          </div>
        );
      }
    });
  }
  if (tasksContext.active.done) {
    tasks = tasksContext.done.map((t) => {
      if (t.title) {
        return (
          <div
            key={t.id}
            className="bg-[#d9d9d9] w-[100%] border border-solid border-purple-950 mx-auto rounded-sm shadow-2xl mt-4 p-4 flex justify-between items-center"
          >
            <div className="space-x-3">
              <DeleteOutlineIcon
                onClick={() => {
                  handleDeleteClick(t.id);
                }}
                className="bg-white border border-solid border-red-500 text-red-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
              <CheckIcon
                onClick={(e) => {
                  handleCheckClick(t.id, e);
                }}
                className="bg-green-700 border border-solid border-green-500 text-white text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
              <ModeOutlinedIcon
                onClick={() => {
                  handleEditClick(t.id, t.title);
                }}
                className="bg-white border border-solid border-purple-500 text-purple-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black max-sm:text-[16px]">
                {t.title}
              </h1>
            </div>
          </div>
        );
      }
    });
  }
  if (tasksContext.active.notDone) {
    tasks = tasksContext.notDone.map((t) => {
      if (t.title) {
        return (
          <div
            key={t.id}
            className="bg-[#d9d9d9] w-[100%] border border-solid border-purple-950 mx-auto rounded-sm shadow-2xl mt-4 p-4 flex justify-between items-center"
          >
            <div className="space-x-3">
              <DeleteOutlineIcon
                onClick={() => {
                  handleDeleteClick(t.id);
                }}
                className="bg-white border border-solid border-red-500 text-red-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
              <CheckIcon
                onClick={(e) => {
                  handleCheckClick(t.id, e);
                }}
                className="bg-white border border-solid border-green-500 text-green-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
              <ModeOutlinedIcon
                onClick={() => {
                  handleEditClick(t.id, t.title);
                }}
                className="bg-white border border-solid border-purple-500 text-purple-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black max-sm:text-[16px]">
                {t.title}
              </h1>
            </div>
          </div>
        );
      }
    });
  }

  function handleCheckClick(id, e) {
    e.target.style = "background-color: green; color: white";
    tasksContext.hadnleDoneTasks(id);
  }

  function handleDeleteClick(id) {
    const updatedTasks = tasksContext.tasksTtiles.filter((t) => {
      if (t.id !== id) {
        return t;
      }
    });
    tasksContext.handleDeleteTaks(updatedTasks);
  }

  function handleEditClick(idNumber, title) {
    tasksContext.handleShowEditPopup({
      id: idNumber,
      state: true,
      prevTitle: title,
    });
  }

  return <>{tasks}</>;
}
