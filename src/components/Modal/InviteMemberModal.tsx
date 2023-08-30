// hooks
import { useRef, useContext, useEffect, useState } from "react";

// context
import { AppContext } from "../../contexts/AppProvider";

// firebase
import { updateRoomMember } from "../../firebase/firebaseRooms";

// react toastify
import { toast } from "react-toastify";

// interface
import { userInterface } from "../../interfaces/UserInterface";

const InviteMemberModal = () => {
  const {
    isInviteMemberVisible,
    setIsInviteMemberVisible,
    users,
    selectedRoom
  } = useContext(AppContext);
  const [searchText, setSearchText] = useState("");
  const [listUserInvite, setListUserInvite] = useState<userInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalVisible = () => {
      if (dialogRef.current) {
        if (isInviteMemberVisible) {
          dialogRef.current.showModal();
        } else {
          dialogRef.current.close();
        }
      }
    };
    return modalVisible();
  }, [isInviteMemberVisible]);

  const handleCloseModal = () => {
    setSearchText("");
    setListUserInvite([]);
    setIsInviteMemberVisible(false);
  };

  const handleOk = async () => {
    setIsLoading(true);
    const listIdUser = listUserInvite.map((u: userInterface) => u.uid);
    const res = await updateRoomMember(selectedRoom, listIdUser);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setIsLoading(false);
    handleCloseModal();
  };

  const handleClickInvite = (userInvite: userInterface) => {
    setListUserInvite((prevState) => [...prevState, userInvite]);
  };

  const handleClickUnInvite = (userUnInvite: userInterface) => {
    const newList = listUserInvite.filter(
      (user: userInterface) => user.uid !== userUnInvite.uid
    );
    setListUserInvite(newList);
  };

  const usersForThisInvite =
    users && selectedRoom.members?.length > 0
      ? users.filter(
          (u: userInterface) => !selectedRoom.members.includes(u.uid)
        )
      : users;

  return (
    <dialog
      ref={dialogRef}
      className="modal text-black"
    >
      <div className="modal-box px-0">
        <h3 className="font-bold text-lg px-6 pb-6">Thêm thành viên</h3>
        <hr className="w-full" />
        <div className="p-6 pb-0">
          <input
            type="text"
            placeholder="Nhập tên người dùng"
            className="input input-bordered w-full h-10 focus:outline-none focus:border-sky-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="flex flex-row flex-wrap m-3">
          {usersForThisInvite && searchText !== "" ? (
            usersForThisInvite
              .filter((user: userInterface) =>
                user.displayName
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
              .map((user: userInterface) => (
                <div
                  key={user.uid}
                  className="flex items-center w-fit px-2 py-1 rounded-md bg-slate-100 ml-2 mb-2"
                >
                  <div className="avatar mr-2">
                    <div className="w-8 rounded-[50%]">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                  <p>{user.displayName}</p>
                  {listUserInvite.some(
                    (u: userInterface) => u.uid === user.uid
                  ) ? (
                    <></>
                  ) : (
                    <button
                      className="ml-2 bg-sky-200 rounded-md p-1 hover:bg-blue-400 hover:text-white"
                      onClick={() => handleClickInvite(user)}
                    >
                      Mời
                    </button>
                  )}
                </div>
              ))
          ) : (
            <></>
          )}
        </div>
        <hr className="w-full" />
        {listUserInvite.length > 0 ? (
          <p className="ml-3 mt-2">Danh sách người dùng đã được chọn:</p>
        ) : (
          <></>
        )}
        <div className="flex flex-row flex-wrap m-3">
          {listUserInvite ? (
            listUserInvite.map((user: userInterface) => (
              <div
                key={user.uid}
                className="flex items-center w-fit px-2 py-1 rounded-md bg-sky-100 ml-2 mb-2"
              >
                <div className="avatar mr-2">
                  <div className="w-8 rounded-[50%]">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <p>{user.displayName}</p>
                <button
                  className="ml-2 bg-red-200 rounded-md p-1 hover:bg-red-400 hover:text-white"
                  onClick={() => handleClickUnInvite(user)}
                >
                  Xóa
                </button>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        {listUserInvite.length > 0 ? <hr className="w-full" /> : <></>}
        <div className="modal-action pr-6">
          <button
            className="btn h-10 min-h-8 capitalize"
            onClick={handleCloseModal}
            type="button"
          >
            Cancel
          </button>
          <button
            className="btn btn-info hover:bg-sky-500 h-10 min-h-8 capitalize text-white"
            onClick={handleOk}
          >
            {isLoading ? (
              <span className="loading loading-spinner text-neutral"></span>
            ) : (
              "Ok"
            )}
          </button>
        </div>
      </div>
      <form
        method="dialog"
        className="modal-backdrop"
      >
        <button
          className="cursor-default"
          onClick={handleCloseModal}
        >
          close
        </button>
      </form>
    </dialog>
  );
};

export default InviteMemberModal;
