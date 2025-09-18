// MUI icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
export default function ToDoTask({
  tasksTtiles,
  active,
  filteredTasks,
  handlers,
}) {
  let tasks;
  if (active.all) {
    tasks = filteredTasks.all.map((t) => {
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
                  handleCheckClick(t.id, e, t.isCompleted);
                }}
                className={`${
                  t.isCompleted
                    ? "bg-green-500 text-white"
                    : "text-green-500 bg-white"
                } border border-solid border-green-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer`}
              />
              <ModeOutlinedIcon
                onClick={() => {
                  handleEditClick(t.id, t.title, t.time, t.date);
                }}
                className="bg-white border border-solid border-purple-500 text-purple-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
            </div>
            <div className=" text-end">
              <h1
                className={`text-2xl font-bold text-black mb-2 max-sm:text-[16px] ${
                  t.isCompleted ? "line-through decoration-black" : ""
                }`}
              >
                {t.title}
              </h1>
              <div className="flex justify-center items-center space-x-2 text-black font-bold">
                <p className="bg-red-600 rounded-sm px-2 max-sm:text-[14px]">
                  {t.time}
                </p>
                <p className="bg-red-600 rounded-sm px-2 max-sm:text-[14px]">
                  {t.date}
                </p>
              </div>
            </div>
          </div>
        );
      }
    });
  }
  if (active.done) {
    tasks = filteredTasks.done.map((t) => {
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
                className={`${
                  t.isCompleted
                    ? "bg-green-500 text-white"
                    : "text-green-500 bg-white"
                } border border-solid border-green-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer`}
              />
              <ModeOutlinedIcon
                onClick={() => {
                  handleEditClick(t.id, t.title, t.time, t.date);
                }}
                className="bg-white border border-solid border-purple-500 text-purple-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
            </div>
            <div className=" text-end">
              <h1 className="text-2xl font-bold mb-2 text-black max-sm:text-[16px] line-through decoration-black">
                {t.title}
              </h1>
              <div className="flex justify-center items-center space-x-2 text-black font-bold">
                <p className="bg-red-600 rounded-sm px-2">{t.time}</p>
                <p className="bg-red-600 rounded-sm px-2">{t.date}</p>
              </div>
            </div>
          </div>
        );
      }
    });
  }
  if (active.notDone) {
    tasks = filteredTasks.notDone.map((t) => {
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
                className={`${
                  t.isCompleted
                    ? "bg-green-500 text-white"
                    : "text-green-500 bg-white"
                } border border-solid border-green-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer`}
              />
              <ModeOutlinedIcon
                onClick={() => {
                  handleEditClick(t.id, t.title, t.time, t.date);
                }}
                className="bg-white border border-solid border-purple-500 text-purple-500 text-[35px] max-sm:text-[25px] rounded-[50%] p-1 cursor-pointer"
              />
            </div>
            <div className=" text-end">
              <h1 className="text-2xl font-bold mb-2 text-black max-sm:text-[16px]">
                {t.title}
              </h1>
              <div className="flex justify-center items-center space-x-2 text-black font-bold">
                <p className="bg-red-600 rounded-sm px-2">{t.time}</p>
                <p className="bg-red-600 rounded-sm px-2">{t.date}</p>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  function handleCheckClick(id, e, isCompleted) {
    e.target.classList.toggle("bg-white");
    e.target.classList.toggle("text-green-500");
    e.target.classList.toggle("bg-green-500");
    e.target.classList.toggle("text-white");

    // e.target.classLis.toggle("background-color: green; color: white");

    handlers.hadnleDoneTasks(id, isCompleted);
  }

  function handleDeleteClick(id) {
    const updatedTasks = tasksTtiles.filter((t) => {
      if (t.id !== id) {
        return t;
      }
    });
    handlers.handleDeleteTaks({
      state: true,
      isDeleted: false,
      updated: updatedTasks,
    });
  }

  function handleEditClick(idNumber, title, time, date) {
    handlers.handleShowEditPopup({
      id: idNumber,
      state: true,
      prevTitle: title,
      time: time,
      date: date,
    });
  }
  return (
    <>
      {tasks.length < 1 ? (
        <div className="font-bold mt-8 text-2xl text-gray-400">
          لا توجد مهام
        </div>
      ) : (
        tasks
      )}
    </>
  );
}
