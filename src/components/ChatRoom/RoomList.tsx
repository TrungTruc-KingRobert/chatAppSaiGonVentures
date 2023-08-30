// hooks
import { useState, useContext } from "react";

// icons
import { FaAngleRight, FaAngleDown, FaRegPlusSquare } from "react-icons/fa";

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
              className="pb-3 cursor-pointer hover:font-bold hover:transition-transform hover:duration-300 hover:ease-in-out transform hover:translate-x-1"
              onClick={() => dataRooms.setSelectedRoom(room)}
            >
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
