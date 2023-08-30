// hooks
import { useContext, useMemo } from "react";

// components
import HeaderChatWindow from "./HeaderChatWindow";
import ContentChatWindow from "./ContentChatWindow";

// context
import { AppContext } from "../../contexts/AppProvider";

// icons
import { FcInfo } from "react-icons/fc";

const ChatWindow = () => {
  const { selectedRoom, selectedRoomId } = useContext(AppContext);

  return selectedRoom && selectedRoomId !== "" ? (
    <div className="h-full">
      <HeaderChatWindow />
      <ContentChatWindow />
    </div>
  ) : (
    <div className="p-2">
      <div className="w-full h-10 flex justify-center items-center  border-2 border-sky-400 rounded-md bg-sky-100 ">
        <FcInfo className="mr-2" />
        Hãy chọn phòng!
      </div>
    </div>
  );
};

export default ChatWindow;
