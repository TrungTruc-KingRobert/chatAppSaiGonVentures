// hooks
import { useState } from "react";

// icons
import { FaAngleRight, FaAngleDown, FaRegPlusSquare } from "react-icons/fa";

const RoomList = () => {
  const [isOpenCollape, setIsOpenCollape] = useState(false);
  return (
    <div
      className="bg-transparent collapse"
      onClick={() => setIsOpenCollape(!isOpenCollape)}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
      />
      <div className="collapse-title text-base flex items-center">
        {isOpenCollape ? (
          <FaAngleDown className="mr-1" />
        ) : (
          <FaAngleRight className="mr-1" />
        )}
        Danh sách các phòng
      </div>
      <div className="collapse-content pl-9">
        <div className="pb-2">Room 2</div>
        <div className="py-2">Room 1</div>
        <div className="py-2">Room 3</div>
        <button className="flex items-center hover:font-bold">
          <FaRegPlusSquare className="mr-1 text-lg" /> Thêm phòng
        </button>
      </div>
    </div>
  );
};

export default RoomList;
