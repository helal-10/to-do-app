import { useContext } from "react";
import { TasksContext } from "../contexts/tasksContext";
import { useState } from "react";
export default function EditTaskPopup() {
  const [inputValue, setInputValue] = useState("");
  const tasks = useContext(TasksContext);
  if (tasks.editState.state) {
    return (
      <>
        {/* <div className="absolute top-0 left-0 min-w-[100vw] min-h-[100vh] bg-black "></div> */}
        <div className="absolute left-[-5%] top-[50%] p-4 translate-y-[-50%] border border-solid border-[#d9d9d9] min-w-[110%] rounded-sm shadow-2xl bg-purple-900">
          <h1 className="text-end text-2xl text-[#d9d9d9] font-bold">
            تعديل المهمة
          </h1>
          <input
            defaultValue={tasks.editState.prevTitle}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="border-b-2 border-sold border-[#d9d9d9] text-end w-[100%] mt-12 focus:outline-0"
            placeholder="عنوان المهمة"
          />

          <div className="flex justify-start items-center mt-8 space-x-6">
            <button
              onClick={handleEditConfirm}
              className="font-bold cursor-pointer hover:text-red-600 hover:bg-[#d9d9d9] duration-200 p-1 rounded-sm"
            >
              تعديل
            </button>
            <button
              onClick={handleEditCancel}
              className="font-bold cursor-pointer hover:text-black hover:bg-[#d9d9d9] duration-200 p-1 rounded-sm"
            >
              الغاء
            </button>
          </div>
        </div>
      </>
    );
  }
  function handleEditConfirm() {
    if (inputValue) {
      tasks.handleEditTasks({
        state: false,
        confirm: true,
        newTitle: inputValue,
      });
    }
  }
  function handleEditCancel() {
    tasks.handleEditTasks({ state: false, confirm: false });
  }
}
