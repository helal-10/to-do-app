import { useRef } from "react";
export default function Footer({
  changeTaskValue,
  taskValue,
  handleAddNewTask,
}) {
  const inputFocus = useRef(null);
  function handleAddTaskTitle() {
    inputFocus.current.focus();
    handleAddNewTask();
  }
  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <button
        onClick={handleAddTaskTitle}
        className="flex-1 border border-solid border-transparent cursor-pointer text-black bg-[#d9d9d9] duration-300 rounded-sm p-2 font-bold dura hover:bg-gray-500 hover:text-white "
      >
        اضافة
      </button>
      <input
        onChange={(e) => {
          changeTaskValue(e.target.value);
        }}
        ref={inputFocus}
        placeholder="عنوان المهمة"
        value={taskValue}
        className="flex-2 border border-solid border-[#d9d9d9] rounded-sm p-2 outline-0 focus:border focus:border-solid focus:border-gray-500 max-sm:text-[14px]"
      />
    </div>
  );
}
