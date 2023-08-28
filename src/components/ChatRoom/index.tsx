// components
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

const ChatRoom = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr]">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="h-full">
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatRoom;
