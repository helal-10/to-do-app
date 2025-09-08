import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
export default function EventIcons({ h }) {
  return (
    <>
      <DeleteOutlineOutlinedIcon
        onClick={d}
        className="bg-white rounded-[50%] text-red-700 p-1 cursor-pointer border border-solid border-red-700"
        style={{ fontSize: "30px" }}
      />
      <EditOutlinedIcon
        className="bg-white rounded-[50%] text-blue-700 p-1 cursor-pointer border border-solid border-blue-700"
        style={{ fontSize: "30px" }}
      />
      <CheckOutlinedIcon
        className="bg-white rounded-[50%] text-green-700 p-1 cursor-pointer border border-solid border-green-700"
        style={{ fontSize: "30px" }}
      />
    </>
  );
  function d(e) {
    h(true);
  }
}
