// hooks
import { useRef, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

// context
import { AppContext } from "../../contexts/AppProvider";
import { AuthContext } from "../../contexts/AuthProvider";

// firebase
import { addRoom } from "../../firebase/firebaseRooms";

// react toastify
import { toast } from "react-toastify";

interface FormData {
  roomName: string;
  roomDescription: string;
}

const AddRoomModal = () => {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);

  const user = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalVisible = () => {
      if (dialogRef.current) {
        if (isAddRoomVisible) {
          dialogRef.current.showModal();
        } else {
          dialogRef.current.close();
        }
      }
    };
    return modalVisible();
  }, [isAddRoomVisible]);

  const handleCloseModal = () => {
    reset();

    setIsAddRoomVisible(false);
  };

  const handleOk = (data: FormData) => {
    const res = addRoom({
      name: data.roomName,
      description: data.roomDescription,
      members: [user.uid]
    });

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }

    handleCloseModal();
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal text-black"
    >
      <form
        onSubmit={handleSubmit(handleOk)}
        className="modal-box px-0"
      >
        <h3 className="font-bold text-lg px-6 pb-6">Tạo phòng</h3>
        <hr className="w-full" />
        <div className="px-6">
          <label className="label">
            <span className="label-text text-base">Tên phòng</span>
          </label>
          <input
            type="text"
            placeholder="Nhập tên phòng"
            className={`input input-bordered w-full h-10 focus:outline-none ${
              errors.roomName ? "border-red-500" : "focus:border-sky-400"
            }`}
            {...register("roomName", { required: true })}
          />
          {errors.roomName && (
            <span className="text-red-500 text-xs">
              Tên phòng không được bỏ trống
            </span>
          )}

          <label className="label">
            <span className="label-text text-base">Mô tả</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full focus:outline-none focus:border-sky-400 text-base"
            placeholder="Nhập mô tả..."
            {...register("roomDescription")}
          ></textarea>
        </div>
        <hr className="w-full" />
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
            type="submit"
          >
            Ok
          </button>
        </div>
      </form>
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

export default AddRoomModal;
