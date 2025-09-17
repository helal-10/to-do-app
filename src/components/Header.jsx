export default function Header({ active, handleFilteringTasks }) {
  return (
    <div style={{ direction: "rtl" }}>
      <h1 className="text-purple-200 text-5xl font-bold max-sm:text-[30px] max-md:text-[40px] max-lg:text-[50px]">
        المهام
      </h1>
      <hr className="border-purtext-purple-200 mt-4" />
      <ul
        className={`flex justify-center items-center space-x-3 min-lg:space-x-2 text-purple-200 mt-4 max-sm:text-[12px] `}
      >
        <li
          onClick={() => {
            handleFilteringTasks({
              all: true,
              done: false,
              notDone: false,
            });
          }}
          className={`li-btn min-lg:text-[20px] ${active.all ? "active" : ""}`}
        >
          كل المهام
        </li>
        <li
          onClick={() => {
            handleFilteringTasks({
              all: false,
              done: true,
              notDone: false,
            });
          }}
          className={`li-btn min-lg:text-[20px] ${active.done ? "active" : ""}`}
        >
          المنجزه
        </li>
        <li
          onClick={() => {
            handleFilteringTasks({
              all: false,
              done: false,
              notDone: true,
            });
          }}
          className={`li-btn min-lg:text-[20px] ${
            active.notDone ? "active" : ""
          }`}
        >
          الغير منجزة
        </li>
      </ul>
    </div>
  );
}
