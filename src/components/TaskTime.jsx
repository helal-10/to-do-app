export default function TaskTime({ dateTime, handleDateAndTime }) {
  return (
    <>
      <input
        value={dateTime.time}
        onChange={(e) => {
          const updatedDate = { ...dateTime, time: e.target.value };
          handleDateAndTime(updatedDate);
        }}
        className="w-[115px] border border-solid border-black/50 rounded-sm focus:outline-0 text-black max-sm:w-[105px]"
        type="time"
      />
      <input
        value={dateTime.date}
        onChange={(e) => {
          const updatedTime = { ...dateTime, time: e.target.value };
          handleDateAndTime(updatedTime);
        }}
        className="w-[115px] border border-solid border-black/50 rounded-sm focus:outline-0 text-black max-sm:w-[100px]"
        type="date"
      />
    </>
  );
}
