export default function ConfirmDeletePopUp({ state }) {
  if (state) {
    return (
      <div className="bg-black/40 w-svw h-svh absolute left-0 top-0">
        <div className="shadow-2xl bg-white w-fit h-fit p-4 rounded-sm absolute left-[50%] top-[50%] translate-[-50%]">
          <h1 className="text-2xl text-black font-bold">
            Are You Sure To Delete The Task?
          </h1>
          <p className="text-gray-500 font-bold mt-2">
            You Can Not Go Back If You Delete it
          </p>
          <div className="flex justify-end items-center text-red-500 space-x-4 mt-4">
            <button onClick={cancleDelete} className="btn cursor-pointer">
              Close
            </button>
            <button onClick={confirmDelete} className="btn cursor-pointer">
              Yes, Delete it
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export function cancleDelete(e) {
  console.log("it canclled");
  return true;
}
// eslint-disable-next-line react-refresh/only-export-components
export function confirmDelete(e) {
  console.log("it not canclled");
  return true;
}
