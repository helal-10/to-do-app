export default function DeleteTaskPopUp({
  deleteState,
  handleConfirmDeleteTask,
}) {
  if (deleteState.state)
    return (
      <>
        <div className="absolute bg-black/50 w-[100vw] h-[100vh] top-0 left-0"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-900 w-[40%] mx-auto rounded-md shadow-2xl p-4 max-sm:w-[90%] max-md:w-[90%] max-lg:w-[70%]">
          <h1 className="text-3xl font-bold my-6 text-end max-sm:text-[20px] max-md:text-2xl">
            هل أنت متاكد من رغبتك في حذف المهمة؟
          </h1>
          <p className="text-gray-400 font-bold text-xl text-end my-6 max-sm:text-[16px] max-md:text-[14px]">
            لا يمكنك التراجع بعد الحذف!
          </p>
          <div className="flex items-center justify-start space-x-4 ">
            <button
              onClick={() => {
                handleConfirmDeleteTask(true);
              }}
              className="text-red-500 duration-200 font-bold cursor-pointer hover:bg-gray-400 p-2 rounded-sm"
            >
              تأكيد
            </button>
            <button
              onClick={() => {
                handleConfirmDeleteTask(false);
              }}
              className="text-red-500 duration-200 font-bold cursor-pointer hover:bg-gray-400 p-2 rounded-sm"
            >
              تراجع
            </button>
          </div>
        </div>
      </>
    );
}
