import { useContext } from "react";
import { tasks } from "../contexts/taskContext";
import { useState } from "react";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ConfirmDeletePopUp from "./ConfirmDeletePopUp";
export default function Task({
  updateTasks,
  handleAllTasks,
  state,
  handlePopUpState,
}) {
  const [deleteState, setDeleteState] = useState(false);
  const allTasks = useContext(tasks);
  const allTasksList = allTasks.map((t) => {
    if (t.title) {
      return (
        <div
          key={t.id}
          className="flex justify-between items-center bg-blue-900 rounded-sm p-4 my-4"
        >
          <ConfirmDeletePopUp
            state={state}
            handlePopUpState={handlePopUpState}
            handleDeleteState={setDeleteState}
          />
          <div>
            <div>
              <h1 className="text-3xl font-bold text-white">{t.title}</h1>
            </div>
            <div className="flex justify-between items-center space-x-3"></div>
          </div>
          <div className="space-x-3">
            <DeleteOutlineOutlinedIcon
              onClick={() => {
                handlePopUpState(true);
                console.log();
                console.log(deleteState + " from onClick function");
                handleDeleteClick(t.id);
              }}
              className="bg-white rounded-[50%] text-red-700 p-1 cursor-pointer border border-solid border-red-700"
              style={{ fontSize: "30px" }}
            />
            <EditOutlinedIcon
              className="bg-white rounded-[50%] text-blue-700 p-1 cursor-pointer border border-solid border-blue-700"
              style={{ fontSize: "30px" }}
            />
            <CheckOutlinedIcon
              className="bg-white rounded-[50%] text-green-700 p-1 cursor-pointer border border-solid border-green-700"
              style={{ fontSize: "30px" }}
            />
          </div>
        </div>
      );
    }
  });

  function handleDeleteClick(id) {
    console.log(deleteState + " from handleDeleteClick function");

    if (deleteState) {
      const newUpdatedTasks = handleAllTasks.filter((n) => n.id !== id);

      updateTasks(newUpdatedTasks);
      setDeleteState(false);
    }
  }
  return <>{allTasksList}</>;
}
