import EventIcons from "./EventIcons";

export default function Task({ title, handlePopUp }) {
  if (title) {
    return (
      <div className="flex justify-between items-center bg-blue-900 rounded-sm p-4 my-4">
        <div>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
        <div className="flex justify-between items-center space-x-3">
          <EventIcons h={handlePopUp} />
        </div>
      </div>
    );
  }
}
