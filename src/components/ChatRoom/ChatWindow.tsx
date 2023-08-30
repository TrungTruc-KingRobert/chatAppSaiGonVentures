// hooks
import { useContext, useMemo } from "react";

// components
import HeaderChatWindow from "./HeaderChatWindow";
import ContentChatWindow from "./ContentChatWindow";

// context
import { AppContext } from "../../contexts/AppProvider";

const ChatWindow = () => {
  return (
    <div className="h-full">
      <HeaderChatWindow />
      <ContentChatWindow />
    </div>
  );
};

export default ChatWindow;
