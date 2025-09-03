import { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

let count = 1;
export default function Footer() {
  const [taskValue, setTaskValue] = useState("");
  const [finalTaskValue, setFinalTaskValue] = useState([]);
  const taskList = finalTaskValue.map((t) => {
    return (
      <div
        key={t.id}
        className="mt-10 bg-blue-900 rounded-md shadow flex justify-between items-center p-2 "
      >
        <h1 className="text-[24px] font-bold ">{t.title}</h1>
        <div className="flex space-x-4">
          <div
            onClick={handleDelete}
            id={t.id}
            className="cursor-pointer border border-solid border-red-500 rounded-[50%] text-red-500 bg-white w-8 h-8 flex justify-center items-center"
          >
            <DeleteOutlineOutlinedIcon style={{ fontSize: "16px" }} />
          </div>
          <div className="cursor-pointer border border-solid border-blue-500 rounded-[50%] text-blue-500 bg-white w-8 h-8 flex justify-center items-center">
            <CreateOutlinedIcon style={{ fontSize: "16px" }} />
          </div>
          <div className="cursor-pointer border border-solid border-green-500 rounded-[50%] text-green-500 bg-white w-8 h-8 flex justify-center items-center">
            <CheckOutlinedIcon style={{ fontSize: "16px" }} />
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {taskList}
      <div className="flex justify-center items-center space-x-2 px-2 mt-6">
        <button
          onClick={addNewTask}
          className="flex-1 btn bg-red-900 cursor-pointer"
        >
          Add
        </button>
        <input
          onChange={handleStateValue}
          value={taskValue}
          type="text"
          className="flex-3 btn text-gray-700 font-bold "
          placeholder="Task Title"
        />
      </div>
    </>
  );
  function addNewTask() {
    setFinalTaskValue((e) => [...e, { id: count, title: taskValue }]);
    count++;
  }

  function handleStateValue(e) {
    setTaskValue(e.target.value);
  }
  function handleDelete(e) {
    for (let t in finalTaskValue ) {
      if (t.id == e.id) {
        
      }
    }
  } 
}
