import React from "react";
import { Tooltip } from "react-tooltip";
import Message from "./Message";

const ContentChatWindow = () => {
  return (
    <div className="h-[calc(100vh-60px)] flex flex-col p-3 justify-end">
      {/* danh sách tin nhắn */}
      <div className="max-h-full overflow-y-auto scrollbar scrollbar-thumb-sky-400">
        <Message
          text="Test"
          photoURL=""
          displayName="Tung"
          createdAt={54564512}
        />
        <Message
          text="Test"
          photoURL=""
          displayName="Tung"
          createdAt={54564512}
        />
        <Message
          text="Test"
          photoURL=""
          displayName="Tung"
          createdAt={54564512}
        />
        <Message
          text="Test"
          photoURL=""
          displayName="Tung"
          createdAt={54564512}
        />
      </div>

      {/* Nhập nội dung tin nhắn */}
      <form className="flex justify-between items-center p-1 border-[1px] rounded-[4px]">
        <input
          className="w-full pl-2 outline-none"
          placeholder="Nhập tin nhắn..."
        />
        <button className="mr-2">Gửi</button>
      </form>
    </div>
  );
};

export default ContentChatWindow;
