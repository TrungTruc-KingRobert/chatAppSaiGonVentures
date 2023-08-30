// components
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatRoom = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        closeOnClick={false}
        newestOnTop={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="grid grid-cols-[1fr_3fr]">
        <div className="h-full">
          <Sidebar />
        </div>
        <div className="h-full">
          <ChatWindow />
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
