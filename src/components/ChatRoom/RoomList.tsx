// hooks
import { useState, useContext } from "react";

// icons
import {
  FaAngleRight,
  FaAngleDown,
  FaRegPlusSquare,
  FaRegHandPointRight
} from "react-icons/fa";

// context
import { AppContext } from "../../contexts/AppProvider";

const RoomList = () => {
  const dataRooms = useContext(AppContext);

  const [isOpenCollape, setIsOpenCollape] = useState(true);

  const handleAddRoom = () => {
    dataRooms.setIsAddRoomVisible(true);
  };
  return (
    <div
      className={`bg-transparent collapse ${
        isOpenCollape ? "collapse-open" : "collapse-close"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        onClick={() => setIsOpenCollape(!isOpenCollape)}
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
        {dataRooms ? (
          dataRooms.rooms.map((room: any) => (
            <div
              key={room.id}
              className={`pb-3 cursor-pointer ${
                dataRooms.selectedRoomId === room.id
                  ? "flex items-center font-bold"
                  : "hover:font-bold hover:transition-transform hover:duration-300 hover:ease-in-out transform hover:translate-x-1"
              }`}
              onClick={() => dataRooms.setSelectedRoomId(room.id)}
            >
              {dataRooms.selectedRoomId === room.id ? (
                <FaRegHandPointRight className="mr-1" />
              ) : (
                <></>
              )}{" "}
              {room.name}
            </div>
          ))
        ) : (
          <></>
        )}
        <button
          className="flex items-center hover:font-bold"
          onClick={handleAddRoom}
        >
          <FaRegPlusSquare className="mr-1 text-lg" /> Thêm phòng
        </button>
      </div>
    </div>
  );
};

export default RoomList;
