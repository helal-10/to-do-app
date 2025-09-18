export default function NotiBar({ values }) {
  return (
    <div
      className={`fixed bottom-0 left-0 mb-4 ml-4 rounded-sm shadow-2xl p-2 font-bold text-white duration-500 opacity-0 ${
        values.state ? `opacity-100 ${values.bgColor}` : ""
      }`}
    >
      <p>{values.text}</p>
    </div>
  );
}
