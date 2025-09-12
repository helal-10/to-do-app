export default function Header() {
  return (
    <div style={{ direction: "rtl" }}>
      <h1 className="text-purple-200 text-5xl font-bold max-sm:text-[30px]">
        المهام
      </h1>
      <hr className="border-purtext-purple-200 mt-4" />
      <ul className="flex justify-center items-center space-x-3 text-purple-200 mt-4 max-sm:text-[12px] ">
        <li className="li-btn">كل المهام</li>
        <li className="li-btn ">المهام المنجزه</li>
        <li className="li-btn ">المهام الغير منجزة</li>
      </ul>
    </div>
  );
}
