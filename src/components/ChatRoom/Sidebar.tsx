// components
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";

const Sidebar = () => {
  return (
    <div className="h-screen bg-sky-400 text-white">
      <div className="w-full h-[60px] p-2 border-b-2 border-white">
        <UserInfo />
      </div>
      <div className="w-full ">
        <RoomList />
      </div>
    </div>
  );
};

export default Sidebar;
