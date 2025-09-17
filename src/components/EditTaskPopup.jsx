import { useState } from "react";

export default function EditTaskPopup({ editState, handleEditTasks }) {
  const [inputValue, setInputValue] = useState({
    title: editState.prevTitle,
    time: editState.time,
    date: editState.date,
  });

  if (editState.state) {
    return (
      <>
        <div className="absolute bg-black/50 w-[100vw] h-[100vh] top-0 left-0"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-900 w-[40%] mx-auto rounded-md shadow-2xl p-4 max-sm:w-[90%] max-md:w-[90%] max-lg:w-[70%]">
          <h1 className="text-end text-2xl text-[#d9d9d9] font-bold">
            تعديل المهمة
          </h1>
          <div className="flex justify-between items-center space-x-3 border-b-2 border-sold border-[#d9d9d9]">
            <div className="flex-1 flex flex-col space-y-2">
              <input
                onChange={(e) => {
                  setInputValue({ ...inputValue, time: e.target.value });
                }}
                defaultValue={editState.time}
                className="w-[115px] border border-solid border-black/50 rounded-sm focus:outline-0 text-black"
                type="time"
              />
              <input
                onChange={(e) => {
                  setInputValue({ ...inputValue, date: e.target.value });
                }}
                defaultValue={editState.date}
                className="w-[115px] border border-solid border-black/50 rounded-sm focus:outline-0 text-black"
                type="date"
              />
            </div>
            <input
              defaultValue={editState.prevTitle}
              onChange={(e) => {
                setInputValue({ ...inputValue, title: e.target.value });
              }}
              className="text-end w-[100%] mt-12 focus:outline-0"
              placeholder="عنوان المهمة"
            />
          </div>
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
    console.log(inputValue);

    const updatedValues = {
      state: false,
      confirm: true,
      newTitle: inputValue.title,
      newTime: inputValue.time,
      newDate: inputValue.date,
    };
    handleEditTasks(updatedValues);
  }
  function handleEditCancel() {
    const updatedValues = { state: false, confirm: false };
    handleEditTasks(updatedValues);
  }
}
