// react-tooltip
import { Tooltip } from "react-tooltip";

// icons
import { FaUserPlus } from "react-icons/fa";

const HeaderChatWindow = () => {
  return (
    <div className="w-full h-[60px] p-2 border-b-2 border-sky-400">
      <div className="flex justify-between items-cente px-4">
        <div>
          <p>Room 1</p>
          <span className="text-xs">Đây là Room 1</span>
        </div>
        <div className="flex h-10">
          <button className="flex items-center mr-2 hover:font-bold">
            <FaUserPlus className="mr-1" /> Mời
          </button>
          <div className="avatar-group -space-x-4">
            <div
              id="id_user_1"
              className="avatar cursor-pointer"
            >
              <div className="w-8">
                <img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1" />
              </div>
            </div>
            <Tooltip anchorSelect="#id_user_1">
              <button>User name 1</button>
            </Tooltip>
            <div
              id="id_user_2"
              className="avatar cursor-pointer"
            >
              <div className="w-8">
                <img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1" />
              </div>
            </div>
            <Tooltip anchorSelect="#id_user_2">
              <button>User name 2</button>
            </Tooltip>
            <div
              id="id_user_hidden"
              className="avatar placeholder cursor-pointer"
            >
              <div className="w-8 bg-neutral-focus text-neutral-content">
                <span>+99</span>
              </div>
            </div>
            <Tooltip
              anchorSelect="#id_user_hidden"
              className="bg-slate-300 border-2 border-gray-500"
              openOnClick
            >
              <div
                id="id_user_3"
                className="avatar"
              >
                <div className="w-8">
                  <img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1" />
                </div>
              </div>
              <Tooltip anchorSelect="#id_user_3">
                <button>User name 3</button>
              </Tooltip>
              <div
                id="id_user_4"
                className="avatar"
              >
                <div className="w-8">
                  <img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1" />
                </div>
              </div>
              <Tooltip anchorSelect="#id_user_4">
                <button>User name 3</button>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderChatWindow;
