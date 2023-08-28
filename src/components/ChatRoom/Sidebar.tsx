// components
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";

const Sidebar = () => {
  return (
    <div className="h-screen bg-sky-400 text-white">
      <div className="w-full p-2">
        <UserInfo />
      </div>
      <div className="w-full border-t-2 border-white">
        <RoomList />
      </div>
    </div>
  );
};

export default Sidebar;
