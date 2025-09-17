import { useRef, useState } from "react";

import TaskTime from "./TaskTime";
export default function Footer({
  changeTaskValue,
  taskValue,
  handleAddNewTask,
}) {
  const date = new Date();
  // set the default time
  const defaultTime = `${
    date.getHours().toString().length == 1
      ? "0" + date.getHours()
      : date.getHours()
  }:${
    date.getMinutes().toString().length == 1
      ? "0" + date.getMinutes()
      : date.getMinutes()
  }`;

  // set the default date
  const defaultDate = `${date.getFullYear()}-${
    (date.getMonth() + 1).toString().length == 1
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1
  }-${
    date.getDate().toString().length == 1
      ? "0" + date.getDate()
      : date.getDate()
  }`;

  const [dateTime, setDateTime] = useState({
    time: defaultTime,
    date: defaultDate,
  });

  const inputFocus = useRef(null);
  function handleAddTaskTitle() {
    inputFocus.current.focus();
    handleAddNewTask(dateTime);
  }
  return (
    <div className="flex justify-center items-center space-x-4 mt-8 mx-auto max-sm:w-[90%] max-md:w-[75%] max-lg:w-[60%]">
      <button
        onClick={handleAddTaskTitle}
        className="flex-1 border border-solid border-transparent cursor-pointer h-[78px] text-black bg-[#d9d9d9] duration-300 rounded-sm p-2 font-bold dura hover:bg-gray-500 hover:text-white "
      >
        اضافة
      </button>
      <div className="flex-2 flex justify-around items-center space-x-2 w-[100%] h-[78px] border border-solid border-[#d9d9d9] rounded-sm p-2 outline-0 focus:border focus:border-solid focus:border-gray-500">
        <div className="flex-1 flex flex-col space-y-2">
          <TaskTime dateTime={dateTime} handleDateAndTime={handleDateAndTime} />
        </div>
        <input
          onChange={(e) => {
            changeTaskValue(e.target.value);
          }}
          ref={inputFocus}
          placeholder="عنوان المهمة"
          value={taskValue}
          className="flex-2 border border-solid border-[#d9d9d9] rounded-sm p-2 outline-0 focus:border focus:border-solid focus:border-gray-500 max-sm:text-[16px] w-[100%] h-fit"
        />
      </div>
    </div>
  );
  // handler function

  function handleDateAndTime(value) {
    setDateTime(value);
  }
}
