// components
import HeaderChatWindow from "./HeaderChatWindow";
import ContentChatWindow from "./ContentChatWindow";

const ChatWindow = () => {
  return (
    <div className="h-full">
      <HeaderChatWindow />

      <ContentChatWindow />
    </div>
  );
};

export default ChatWindow;
