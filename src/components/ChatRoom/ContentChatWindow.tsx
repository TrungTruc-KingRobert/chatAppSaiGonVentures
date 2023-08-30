// hooks
import { useState, useContext, useMemo, useRef, useEffect } from "react";
import useFirestore from "../../hooks/useFirestore";

// components
import Message from "./Message";

// firebase
import { addMessage } from "../../firebase/firebaseMessage";
import { serverTimestamp } from "firebase/firestore";

// interface
import { AuthContext } from "../../contexts/AuthProvider";
import { messageInterface } from "../../interfaces/MessageInterface";
import { AppContext } from "../../contexts/AppProvider";

// react toastify
import { toast } from "react-toastify";

// react hook form
import { useForm } from "react-hook-form";

interface FormData {
  message: string;
}

const ContentChatWindow = () => {
  const user = useContext(AuthContext);
  const dataRooms = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const handleOnSubmit = (data: FormData) => {
    if (data.message === "") {
      reset();
      return;
    }

    const newMessage: messageInterface = {
      text: data.message,
      photoURL: user.photoURL,
      roomId: dataRooms.selectedRoom.id!,
      displayName: user.displayName
    };
    addMessage(newMessage);

    reset();
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(handleOnSubmit)();
    }
  };

  const messageCondition = useMemo(
    () => ({
      fieldName: "roomId",
      operator: "==",
      compareValue: dataRooms.selectedRoom.id
    }),
    [dataRooms.selectedRoom.id]
  );

  const messages = useFirestore("messages", messageCondition);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

  return (
    <div className="h-[calc(100vh-60px)] flex flex-col p-3 justify-end">
      {/* danh sách tin nhắn */}
      <div
        ref={messagesContainerRef}
        className="max-h-full overflow-y-auto scroll-smooth scrollbar scrollbar-thumb-sky-400 "
      >
        {messages ? (
          messages.map((mes: messageInterface) => (
            <Message
              key={mes.id}
              text={mes.text}
              photoURL={mes.photoURL}
              displayName={mes.displayName}
              createdAt={mes.createdAt ? mes.createdAt : serverTimestamp()}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      {/* Nhập nội dung tin nhắn */}
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex justify-between items-center p-1 mb-4 border-[1px] rounded-[4px]"
      >
        <input
          {...register("message", { required: true })}
          className={`w-full pl-2 outline-none ${
            errors.message ? "border-red-500" : "focus:border-sky-400"
          }`}
          placeholder="Nhập tin nhắn..."
          onKeyDown={handleOnKeyDown}
        />
        <button
          className="mr-2"
          type="submit"
        >
          Gửi
        </button>
      </form>
    </div>
  );
};

export default ContentChatWindow;
