// MUI icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import { useContext } from "react";
import { TasksContext } from "../contexts/tasksContext";
export default function ToDoTask() {
  const tasksContext = useContext(TasksContext);
  const tasks = tasksContext.allTasks.map((t) => {
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
            <CheckIcon className="bg-white border border-solid border-green-500 text-green-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer" />
            <ModeOutlinedIcon
              onClick={() => {
                handleEditClick(t.id);
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

  function handleDeleteClick(id) {
    const updatedTasks = tasksContext.allTasks.filter((t) => {
      if (t.id !== id) {
        return t;
      }
    });
    tasksContext.handleDeleteTaks(updatedTasks);
  }

  function handleEditClick(id) {
    tasksContext.handleShowEditPopup({ id: id, state: true });
  }

  return <>{tasks}</>;
}
